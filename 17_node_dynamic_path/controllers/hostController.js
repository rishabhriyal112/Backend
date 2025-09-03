const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
    res.render('host/addHome' , {pageTitle : 'Register Your Home'})
}

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll((registeredHomes) => res.render('host/host_home_list', { registeredHomes: registeredHomes, pageTitle: 'Host Homes Lists' })
    );
}

exports.postAddHome = (req, res, next) => {
    console.log("Home Registration Successful:", req.body);
    const {houseName , price , location , rating , image} = req.body || {};
    const home = new Home(
    houseName, 
    price,
    location,
    rating,
    image
    );
    home.save();
    res.render('host/home_added',{pageTitle : 'House Registered Successfully'})
}






