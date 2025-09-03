const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
    res.render('addHome' , {pageTitle : 'Register Your Home'})
}

exports.postAddHome = (req, res, next) => {
    console.log("Home Registration Successful:", req.body);
    const {houseName , price , location , rating , image} = req.body;
    const home = new Home(
    req.body.houseName, 
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.image
    );
    home.save();
    res.render('homeAdded',{pageTitle : 'House Registered Successfully'})
}

exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll(
        registeredHomes => res.render('home' , {registeredHomes : registeredHomes , pageTitle : 'airbnb Home'})
    );
    
}


