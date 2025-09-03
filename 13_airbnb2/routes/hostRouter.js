//Core Modules
const path = require('path');

//External Modules
const express = require('express');
const hostRouter = express.Router(); // Create a new router

//Local Module
const rootDir = require("../utils/pathUtil")

// GET route to show the form to register a home
hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome' , {pageTitle : 'Register Your Home'})
});

const registeredHomes = [ ];

// POST route to handle form submission from /add-home
hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Registration Successfull :" , req.body);
    const newHome = {
        houseName: req.body.houseName,
        price: req.body.price,
        location: req.body.location,
        rating: req.body.rating,
        image: req.body.image
    };
    console.log("New home object:", newHome);
    registeredHomes.push(newHome);
    console.log("All registered homes:", registeredHomes);
    res.render('homeAdded',{pageTitle : 'House Registered Successfully'})
});

// ✅ Corrected export statement
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
