const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  userId: String,
  haveRead: Boolean,
  title: String,
  start: Date,
  end: Date,
  comment: String
})

module.exports = mongoose.model('Book', bookSchema)