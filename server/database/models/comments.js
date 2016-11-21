const { Sequelize, database } = require('./../config');

const Comment = database.define('comments', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = Comment;
