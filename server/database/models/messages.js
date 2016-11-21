const { Sequelize, database } = require('./../config');

const Message = database.define('message', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = Message;
