// 获取豆瓣读书的数据 https://book.douban.com/latest

const axios = require('axios').default;
const cheerio = require('cheerio');
const Books = require('../models/Book');
const Book = require('../models/Book');

//获取网页源代码
async function getBooksHTML() {
    const resp = await axios.get('https://book.douban.com/latest')
    return resp.data;
}

async function getBookLinks() {
    const html = await getBooksHTML()
    const $ = cheerio.load(html)
    const achorElements = $('#content .grid-12-12 li a.cover');
    const links = achorElements.map((i, ele) => {
        const href = ele.attribs['href'];
        return href;
    }).get();
    return links;
}

async function getBookDetail(detailUrl) {
    const resp = await axios.get(detailUrl);
    const $ = cheerio.load(resp.data);
    const name = $('h1').text().trim();
    const imgurl = $('#mainpic .nbg img').attr('src');
    const spans = $('#info span.pl');
    const authorSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('作者');
    });
    const author = authorSpan.next('a').text();
    const publishSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('出版年');
    });
    const publishDate = publishSpan[0].nextSibling.nodeValue.trim();
    return {
        name,
        imgurl,
        publishDate,
        author
    }
}

async function fetchAll() {
    const links = await getBookLinks();
    const proms = links.map((link) => {
        return getBookDetail(link)
    });
    return Promise.all(proms)
}

async function saveToDB() {
    const books = await fetchAll();
    await Book.bulkCreate(books)
    console.log('抓取数据并保存到数据库');
}

saveToDB();