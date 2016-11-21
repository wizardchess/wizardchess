const { Sequelize, database } = require('./../config');

const achievement = database.define('achievement', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = achievement;
