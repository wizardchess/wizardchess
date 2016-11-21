const { Sequelize, database } = require('./../config');

const Invitation = database.define('invitation', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
});

module.exports = Invitation;
