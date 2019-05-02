// Importing the Mongoose library from node_modules
const mongoose = require('mongoose')

// Saving a reference to the Mongoose Schema constructor
const Schema = mongoose.Schema

// Using the Schema constructor to create a bookSchema
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
})

// Creates our model from the bookSchema
const Book = mongoose.model('Book', bookSchema)

// Exports the Book model created using module.export
module.exports = Book
