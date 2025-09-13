const db = require("../utils/databseUtil");

module.exports = class Home {
    constructor(houseName, price, location, rating, image,description ,id) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.image = image;
        this.description = description;
        this.id =id;
    }

    save() {
        return db.execute(`INSERT INTO homes (houseName, price, location, rating, image, description) VALUES ('${this.houseName}', ${this.price}, '${this.location}', ${this.rating}, '${this.image}', '${this.description}')`);
    }
 
    static fetchAll() {
        return db.execute('SELECT * FROM homes');
    }

    static findById(homeId, callback) {
    }

    static deleteById(homeId, callback) {
    }
};
