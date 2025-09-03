//Core Modules
const path = require('path');

// Import the express module
const express = require('express');

//Local Module
const rootDir = require("../utils/pathUtil")

// Create a new router object using express.Router()
const userRouter = express.Router();

// Define a GET route for the root path ("/")
userRouter.get("/", (req, res, next) => {
    // This route responds with a simple homepage containing a link to add a home
    // GET: Used to display the initial page content
    // POST: Would be used (in other routes) to handle form submissions or changes
    res.sendFile(path.join(rootDir , 'views' , 'home.html'))
});

// Export the router so it can be used in other files (like app.js)
module.exports = userRouter;
