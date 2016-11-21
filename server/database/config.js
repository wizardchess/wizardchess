const Sequelize = require('sequelize');
const database = new Sequelize('wizardchess', '', '', {
  dialect: 'postgres'
});

module.exports = {
  Sequelize,
  database
}
