const { registeredHomes } = require('../../14_node_pract_set3/routes/hostRouter');
const Favourite = require('../models/favourite');
const Home = require('../models/home');

exports.getIndex = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => {
        res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home' })
    })
}

exports.getHomes = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => { res.render('store/home_list', { registeredHomes: registeredHomes, pageTitle: 'Homes Lists' }) }
    );
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: 'My Bookings' });
}

exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites(favourites => {
         Home.fetchAll().then(([registeredHomes])=>{
            const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id))
            res.render('store/favourite_list', { favouriteHomes: favouriteHomes, pageTitle: 'My Favourites' })
        }
        );
    })

}

exports.postAddToFavourite = (req, res, next) => {
    console.log("Came to Add to Favourites", req.body);
    Favourite.addToFavourite(req.body.id, error => {
        if (error) {
            console.log("Error Occurred while adding to Favourite : ", error);
        }
        res.redirect("/favourites");
    })
}

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;
    Favourite.deleteById(homeId, error => {
        if (error) {
            console.log("Error Occurred while removing from Favourite : ", error);
        }
        res.redirect("/favourites");
    })

}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then( ([homes]) => {
        const home = homes[0]; 
        if (!home) {
            console.log("Home Not Found");
            res.redirect("/homes")
        }
        else {
            res.render("store/home_detail", { home: home, pageTitle: 'Home Details' });
        }
    
    })
}



