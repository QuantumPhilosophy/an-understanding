// Importing the path library from node_modules
const path = require('path')

// Importing the Router() method from the Express library
const router = require('express').Router()

// Importing the api folder
// Mores specifically the index.js file and anything imported in that file as well
const apiRoutes = require('./api')

// Telling Express Router which routes to use
router.use('/api', apiRoutes)

// Telling Express Router to use the client build index.html
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
)

// Exporting the router via module.exports
module.exports = router
