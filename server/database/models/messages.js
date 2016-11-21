const { Sequelize, database } = require('./../config');

const message = database.define('message', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = message;
