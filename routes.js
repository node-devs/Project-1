const Router = require('express').Router()
const controllers = require('./controllers/books')

Router.post('/books/addBook', controllers.addBook)
Router.get('/books/getAll', controllers.getAllBooks)
Router.get('/books/getOne/:id', controllers.getOneBook)
Router.put('/books/update/:id', controllers.updateBook)
Router.delete('/books/delete/:id', controllers.deleteBook)

module.exports = Router
