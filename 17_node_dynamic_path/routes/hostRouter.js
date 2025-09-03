//External Modules
const express = require('express');
const hostRouter = express.Router(); 

const hostController = require("../controllers/hostController");

hostRouter.get("/add-home",hostController.getAddHome); 
hostRouter.post("/add-home",hostController.postAddHome );
hostRouter.get("/host_home_list",hostController.getHostHomes);

module.exports = hostRouter;

