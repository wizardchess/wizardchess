const { Sequelize, database } = require('./../config');

const invitation = database.define('invitation', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = invitation;
