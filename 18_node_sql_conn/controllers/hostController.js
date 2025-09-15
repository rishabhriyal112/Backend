const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
    res.render('host/edit_home', { pageTitle: 'Register Your Home', editing: false })
}

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';

    Home.findById(homeId).then( ([homes]) => {
        const home = homes[0];
        if (!home) {
            console.log("Home Not Found for editing");
            return res.redirect("/host/host_home_list");
        }
        console.log(homeId, editing, home);
        res.render('host/edit_home', { home: home, pageTitle: 'Edit Your Home', editing: editing })
    })
}

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => { res.render('host/host_home_list', { registeredHomes: registeredHomes, pageTitle: 'Host Homes Lists' }) }
    );
}

exports.postAddHome = (req, res, next) => {
    console.log("Home Registration Successful:", req.body);
    const { houseName, price, location, rating, image , description } = req.body || {};
    const home = new Home(
        houseName,
        price,
        location,
        rating,
        image,
        description
    );
    home.save();
    res.redirect('/host/host_home_list')
}

exports.postEditHome = (req, res, next) => {
    console.log("Home Registration Successful:", req.body);
    const { id, houseName, price, location, rating, image ,description } = req.body || {};
    const home = new Home(
        houseName,
        price,
        location,
        rating,
        image,
        description,
        id
    );
    home.save();
    res.redirect('/host/host_home_list')
}

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("Came to Delete", homeId);
    Home.deleteById(homeId).then( () => {
        res.redirect("/host/host_home_list");
    })
    .catch(error =>{
        console.log('Error while deleting',error);
        
    })

}
