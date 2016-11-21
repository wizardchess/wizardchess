const { Sequelize, database } = require('./../config');

const game = database.define('game', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = user;
