//Core Module
const path = require('path');

//External Module
const express = require('express');

//Local Module
const rootDir = require('../utils/pathUtil');

//Express Router use karenge
const contactRouter = express.Router();

contactRouter.get('/contact-us' ,(req , res , next) =>{
    res.sendFile(path.join(rootDir ,'views' ,'contact.html'));
})

contactRouter.post('/contact-us' ,(req , res , next) =>{
    console.log('Form Data:', req.body);
    res.sendFile(path.join(rootDir , 'views' ,'contactDone.html'));
})


module.exports = contactRouter;
