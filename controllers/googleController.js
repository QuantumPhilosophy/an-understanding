// Importing the Axios library from node_modules
const axios = require('axios')

// Importing the models folder
// Mores specifically the index.js file and anything imported in that file as well
const db = require('../models')

// Exporting a function
// The the findAll function makes an axios.get() call to googleapis.com
// The first .then() filters the results
// The second .then() takes the filtered response and makes a .find() call using the Book schema
// The .then attached to the .find() filters out any books that are already stored in the DB
// The final .then() returns the list of books as a json
// The .catch() there in case there is an error the response is returned as a json
module.exports = {
  findAll: function (req, res) {
    const { query: params } = req
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err))
  }
}
