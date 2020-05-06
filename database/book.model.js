const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  bookTitle: { type: String },
  authorName: { type: String },
  publishDate: { type: Date, default: Date.now() },
  isPublished: { type: Boolean, default: true },
})

module.exports = model('book', bookSchema)
