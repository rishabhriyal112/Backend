//Core Modules
const path = require('path');

//External Modules
const express = require('express');
const hostRouter = express.Router(); // Create a new router

//Local Module
const rootDir = require("../utils/pathUtil")

// GET route to show the form to register a home
hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir , 'views' , 'addHome.html'))
});

// POST route to handle form submission from /add-home
hostRouter.post("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir , 'views' ,'homeAdded.html'))
});

// ✅ Corrected export statement
module.exports = hostRouter;
