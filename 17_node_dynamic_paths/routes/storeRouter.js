const express = require('express');
const storeController = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex );
storeRouter.get("/homes" ,storeController.getHomes );
storeRouter.get("/bookings", storeController.getBookings)
storeRouter.get("/favourites" ,storeController.getFavouriteList);

storeRouter.get("/homes/:homeId",storeController.getHomeDetails);
storeRouter.post("/favourites" ,storeController.postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId" ,storeController.postRemoveFromFavourite);

module.exports = storeRouter;
