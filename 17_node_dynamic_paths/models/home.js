const fs = require('fs');
const path = require('path');
const rootDir = require("../utils/pathUtil");
const Favourite = require('./favourite');
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
    constructor(houseName, price, location, rating, image) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.image = image;
    }

    save() {

        Home.fetchAll(registeredHomes => {
            if (this.id) {
                registeredHomes = registeredHomes.map(home =>
                    home.id === this.id ? this : home)
            }
            else {
                this.id = Math.random().toString().slice(2, 8);
                registeredHomes.push(this);
            }

            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => console.log("File Writing Concluded", error
            ));
        })

    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : [])
        })
    }

    static findById(homeId, callback) {
        this.fetchAll(homes => {
            const homeFound = homes.find(home => home.id === homeId);
            callback(homeFound);
        })
    }

    static deleteById(homeId, callback) {
        this.fetchAll(homes => {
            homes = homes.filter(home => home.id !== homeId);

            fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
                Favourite.deleteById(homeId, callback)
            })
        })
    }
};
