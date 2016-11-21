const Sequelize = require('sequelize');
const database = new Sequelize('wizardchess', '', '', {
  dialect: 'postgres',
  logging: false,
});

module.exports = {
  Sequelize,
  database
}
