const Home = require('../models/home');

exports.getHomes = (req, res, next) => {
    Home.fetchAll((registeredHomes) => res.render('store/home_list', { registeredHomes: registeredHomes, pageTitle: 'Homes Lists' })
    );
}

exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home' })
    );
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: 'My Bookings' });
}

exports.getFavouriteList = (req, res, next) => {
    Home.fetchAll((registeredHomes) =>
         res.render('store/favourite_list', { registeredHomes: registeredHomes, pageTitle: 'My Favourites' }));
}



