// Importing the path library from node_modules
const path = require('path')

// Importing the Router() method from the Express library
const router = require('express').Router()

// Importing the books and google apiRoutes
const bookRoutes = require('./books')
const googleRoutes = require('./google')

// Telling Express Router which routes to use
router.use('/books', bookRoutes)

router.use('/google', googleRoutes)

// Exporting the router via module.exports
module.exports = router
