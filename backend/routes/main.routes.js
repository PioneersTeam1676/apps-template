module.exports = app => {
	const pi = require("../config/pi.config.js")(__filename);
	const express = require("express");

	const Router = express.Router();
  const Controller = require("../controllers/" + pi.obj + ".controller.js");

	
	/* START OF ROUTES */

	  // Retrieve all Tables
	  Router.get("/tables", Controller.tables);
	
	  // Retrieve all Cols in a Table
	  Router.get("/tables/:table", Controller.tableCols);
	
	/* END OF ROUTES */

	
  app.use('/api/' + pi.obj, Router);
};
