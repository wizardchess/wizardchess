const { Sequelize, database } = require('./../config');

const user = database.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = user;
