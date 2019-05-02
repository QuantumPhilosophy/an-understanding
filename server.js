// Importing the DotEnv library from node_modules
require('dotenv').config()

// Importing keys.js
const keys = require('./keys.js')

// Importing the Express library from node_modules
const express = require('express')

// Importing the Mongoose library from node_modules
const mongoose = require('mongoose')

// Importing the routes folder
// Mores specifically the index.js file and anything imported in that file as well
const routes = require('./routes')

// Instantiate an instance of the Express library
const app = express()

// Declaring the port that the app will run on
// process.env.PORT is for production deployment
const PORT = process.env.PORT || 3001

// Express Middleware that handles data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// If in the production environment set up and use a static directory 'client/build'
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Telling Express which routes to use
app.use(routes)

// Connecting to the Mongo DB using Mongoose
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://${keys.mongo.user}:${keys.mongo.pass}@ds161062.mlab.com:61062/heroku_vgbvcjs1`,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
).catch()

// Where it all starts
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
)
