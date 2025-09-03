const Favourite = require('../models/favourite');
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
    Favourite.getFavourites(favourites => {
        Home.fetchAll((registeredHomes) => {
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
    Favourite.deleteById(homeId , error =>{
        if(error){
        console.log("Error Occurred while removing from Favourite : ", error);
        }
        res.redirect("/favourites");
    } )
     
}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, home => {
        if (!home) {
            console.log("Home Not Found");
            res.redirect("/homes")
        }
        else {
            res.render("store/home_detail", { home: home, pageTitle: 'Home Details' });
        }

    })
}



