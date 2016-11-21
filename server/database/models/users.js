const { Sequelize, database } = require('./../sequelize');

const user = database.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = user;
