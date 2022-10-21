module.exports = app => {
	const pi = require("../config/pi.config.js")(__filename);
	const express = require("express");

	const Router = express.Router();
  const Controller = require("../controllers/" + pi.obj + ".controller.js");

	
	/* START OF ROUTES */

	  // Create a new Tutorial
	  Router.post("/", Controller.create);
	
	  // Retrieve all Tutorials
	  Router.get("/", Controller.findAll);
	
	  // Retrieve all published Tutorials
	  Router.get("/published", Controller.findAllPublished);
	
	  // Retrieve a single Tutorial with id
	  Router.get("/:id", Controller.findOne);
	
	  // Update a Tutorial with id
	  Router.put("/:id", Controller.update);
	
	  // Delete a Tutorial with id
	  Router.delete("/:id", Controller.delete);
	
	  // Delete all Tutorials
	  Router.delete("/", Controller.deleteAll);
	
	/* END OF ROUTES */

	
  app.use('/api/' + pi.obj, Router);
};
