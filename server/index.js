const express = require('express');
const app = express();
const Sequelize = require('sequelize');
 
const sequelize = new Sequelize('wizardchess', '', '', {
  dialect: 'postgres'
});

sequelize.sync()
		 .then(() => console.log('We are connected.'))
		 .catch(err => console.log(`Unable to connect with the following error: ${err}`));
		 
//sync connects the server (node) with the database
app.use(express.static(__dirname + '/../public'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

