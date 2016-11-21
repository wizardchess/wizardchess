const { Sequelize, database } = require('./../config');

const Game = database.define('game', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = Game;
