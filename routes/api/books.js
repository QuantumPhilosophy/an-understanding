// Importing the Router() method from the Express library
const router = require('express').Router()

// Importing the bookController file
const bookController = require('../../controllers/bookController')

// Setting up a router with the / route
// Then using the .get() to invoke the findAll() function if the request type is GET
// Then using the .post() to invoke the create() function if the request type is POST
router.route('/')
  .get(bookController.findAll)
  .post(bookController.create)

// Setting up a router with the /:id route
// Then using the .get() to invoke the findAll() function if the request type is GET
// Then using the .put() to invoke the update() function if the request type is PUT
// Then using the .delete() to invoke the remove() function if the request type is DELETE
router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove)

// Exporting the router via module.exports
module.exports = router
