// Importing the models folder
// Mores specifically the index.js file and anything imported in that file as well
const db = require('../models')

// Exports the findAll and findById as well as the create, update and remove functions
module.exports = {

  // Finds all books in the DB and returns them as a json
  // The .catch() there in case there is an error the response is returned as a json
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },

  // Finds a book by ID in the DB and returns it as a json
  // The .catch() there in case there is an error the response is returned as a json
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },

  // Creates a book in the DB and returns it as a json
  // The .catch() there in case there is an error the response is returned as a json
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },

  // Updates a book in the DB and returns it as a json
  // The .catch() there in case there is an error the response is returned as a json
  update: function (req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  },

  // Removes a book from the DB and returns it as a json for confirmation
  // The .catch() there in case there is an error the response is returned as a json
  remove: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err))
  }
}
