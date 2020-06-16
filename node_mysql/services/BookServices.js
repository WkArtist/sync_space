const Book = require('../models/Book');

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