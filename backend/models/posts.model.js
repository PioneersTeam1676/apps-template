module.exports = (conn, Sequelize) => {
	const pi = require("../config/pi.config.js")(__filename);
	return conn.define(pi.obj, {

		
	/* START OF MODEL */
		
		title: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		published: {
			type: Sequelize.BOOLEAN
		}

	/* END OF MODEL */
		
		
	});
};