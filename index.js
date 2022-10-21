const express = require("express");
const compression = require("compression");
//const helmet = require("helmet");
const path = require("path");
const fs = require("fs");

const app = express();

// helps secure Express apps
//app.use(helmet());

// compression middleware (unused as of 9/14/22)
app.use(compression());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// publicly accessible folder
app.use(express.static(path.join(__dirname, "public")));


const db = require("./backend/main.js");

db.conn.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});


// simple route for Svelte
app.get("/", (req, res) => {
	res.sendFile(path + "index.html");
});

// 
let routesDir = path.join(__dirname, "backend/routes");
fs.readdirSync(routesDir).forEach(function(file) {
	require(routesDir + "/" + file)(app);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
