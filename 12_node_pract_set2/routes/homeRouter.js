//Core Module
const path = require('path');

//External Module
const express = require('express');

//Local Module
const rootDir = require('../utils/pathUtil');

//Express Router Use karenge
const homeRouter = express.Router()


homeRouter.get("/" ,(req , res , next) =>{
    res.sendFile(path.join(rootDir , 'views' , 'home.html'))
})


module.exports = homeRouter;
