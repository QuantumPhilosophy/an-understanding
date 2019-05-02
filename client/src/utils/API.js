// Importing the Axios library from node_modules
import axios from 'axios'

// Exporting functions for making Axios calls to the routes/api directory in the outer node app
export default {
  getBooks: function (q) {
    return axios.get('/api/google', { params: { q: 'title:' + q } })
  },
  getSavedBooks: function () {
    return axios.get('/api/books')
  },
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id)
  },
  saveBook: function (bookData) {
    return axios.post('/api/books', bookData)
  }
}
