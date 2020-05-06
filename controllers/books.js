const bookModel = require('../database/book.model')

class bookController {
  addBook(req, res) {
    const book = new bookModel(req.body).save()
    book.then((data) => res.json({ msg: 'book added', data }))
    book.catch((err) => res.json({ msg: 'err adding book', err }))
  }
  getOneBook(req, res) {
    const id = req.params.id
    const book = bookModel.findOne({ _id: id }).exec()
    book.then((data) => res.json(data))
    book.catch((err) => res.json(err))
  }
  getAllBooks(req, res) {
    const books = bookModel.find().exec()
    books.then((data) => res.json(data))
    books.catch((err) => res.json(err))
  }
  updateBook(req, res) {
    const id = req.params.id
    const data = req.body
    const update = bookModel.findOneAndUpdate({ _id: id }, { $set: data }).exec()
    update.then(() => res.send('book updated'))
    update.catch((err) => res.json({ msg: 'could not update book', err }))
  }
  deleteBook(req, res) {
    const id = req.params.id
    const deleteBook = bookModel.findOneAndRemove({ _id: id }).exec()
    deleteBook.then(() => res.send('book deleted'))
    deleteBook.catch((err) => res.json({ msg: 'could not delete book', err }))
  }
}

module.exports = new bookController()
