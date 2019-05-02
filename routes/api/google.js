// Importing the Router() method from the Express library
const router = require('express').Router()

// Importing the googleController file
const googleController = require('../../controllers/googleController')

// Setting up a router with the / route
// Then using the .get() to invoke the findAll() function
router
  .route('/')
  .get(googleController.findAll)

// Exporting the router via module.exports
module.exports = router
