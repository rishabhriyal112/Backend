//External Modules
const express = require('express');
const hostRouter = express.Router(); 

const hostController = require("../controllers/hostController");

hostRouter.get("/add-home",hostController.getAddHome); 
hostRouter.post("/add-home",hostController.postAddHome );
hostRouter.get("/host_home_list",hostController.getHostHomes);
hostRouter.get("/edit_home/:homeId",hostController.getEditHome);
hostRouter.post("/edit_home",hostController.postEditHome);
hostRouter.post("/delete_home/:homeId",hostController.postDeleteHome);


module.exports = hostRouter;

 