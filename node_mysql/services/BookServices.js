const Book = require('../models/Book');
const {Op} = require('sequelize');

exports.addBook = async function (bookObj) {
    const ins = await Book.create(bookObj);
    return ins.toJSON();
}

exports.deleteBook = async function (bookId) {
    await Book.destroy ({
        where: {
            id: bookId
        }
    })
}

exports.updateBook = async function (bookId, bookObj) {
    Book.update(bookObj, {
        where: {
            id: bookId
        }
    })
}

exports.getBookById = async function (id) {
    const result = await Book.findByPk(id);
    if (result) {
      return result.toJSON();
    }
    return null;
  };

exports.getBooks = async function (page = 1, limit = 10, keywords = "") {
    const result = await Student.findAndCountAll({
        attributes: ['id','name','sex','birthday'],
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: `%${keywords}%`,
                    }
                },{
                    author: {
                        [Op.like]: `%${keywords}%`
                    }
                }
            ]
        },
        offset: (page - 1) * limit,
        limit: +limit,
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}