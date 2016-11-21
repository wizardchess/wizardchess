const { Sequelize, database } = require('./../config');

const Friend = database.define('friend', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = Friend;
