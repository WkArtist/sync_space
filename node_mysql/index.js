require('./init')

const express = require('express')
// const http = require('http');
const app = express();
// const server = http.createServer(app);

app.get('/abc', (req, res) => {
    // req和res是被express封装后的对象
    // res.send("<h1>abc</h1>")
    // res.status(302).header("location","https://www.baidu.com").end()
    // res.status(302).location("https://www.baidu.com").end()
    res.redirect(302, "https://www.taobao.com")
});

app.listen(9527, () => {
    console.log('server listen on 9527')
})




// function listen(port, callback) {
//     const http = require("http")
//     http.createServer(this).listen(port, callback)
// }