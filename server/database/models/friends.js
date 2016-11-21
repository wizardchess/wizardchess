const { Sequelize, database } = require('./../config');

const friend = database.define('friend', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = friend;
