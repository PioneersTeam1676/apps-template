const pi = require("../config/pi.config.js")(__filename);
const db = require("../main.js");
const op = db.Sequelize.Op;

// https://sequelize.org/api/v6/class/src/model.js~model
const Model = db[pi.obj];


/* START OF CONTROLLERS */
	
	// Retrieve all Tables in the database
	exports.tables = (req, res) => {	
	  Model.query('SHOW tables')
	    .then(data => {
				var tables = [];
				data[0].forEach(function(table, i) {
					var key = Object.keys(table)[0];
					tables[i] = table[key];
				});
	      res.send(tables);
	    })
	    .catch(err => {
	      res.status(500).send({
	        message:
	          err.message || "Some error occurred while retrieving table names."
	      });
	    });
	};
	
	// Retrieve all Cols in a Table
	exports.tableCols = (req, res) => {
	  const table = req.params.table;

		// TO-DO: prevent SQL injection
	  Model.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'" + table + "'")
	    .then(data => {
				data = data[0];
	      if (data.length > 0) {
					var cols = [];
					data.forEach(function(col, i) {
						cols[i] = col.COLUMN_NAME;
					});
	        res.send(cols);
	      } else {
	        res.status(404).send({
	          message: `Cannot find cols for table '${table}'.`
	        });
	      }
	    })
	    .catch(err => {
	      res.status(500).send({
	        message: "Error retrieving cols for table '" + table + "''"
	      });
	    });
	};

/* END OF CONTROLLERS */