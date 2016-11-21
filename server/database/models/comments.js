const { Sequelize, database } = require('./../config');

const comments = database.define('comments', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = comments;
