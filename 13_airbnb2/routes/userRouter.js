// Import the express module
const express = require('express');

//Local Module
const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require('./hostRouter');


// Create a new router object using express.Router()
const userRouter = express.Router();

// Define a GET route for the root path ("/")
userRouter.get("/", (req, res, next) => {
    // This route responds with a simple homepage containing a link to add a home
    // GET: Used to display the initial page content
    // POST: Would be used (in other routes) to handle form submissions or changes
    console.log(registeredHomes);
    res.render('home' , {registeredHomes : registeredHomes , pageTitle : 'airbnb Home'})
});

// Export the router so it can be used in other files (like app.js)
module.exports = userRouter;
