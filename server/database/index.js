const Sequelize = require('sequelize');

const database = new Sequelize('wizardchess', '', '', {
  dialect: 'postgres'
});

database.sync()
		 .then(() => console.log('We are connected.'))
		 .catch(err => console.log(`Unable to connect with the following error: ${err}`));

//sync connects the server (node) with the database
