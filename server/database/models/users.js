const { Sequelize, database } = require('./../config');

const User = database.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: Sequelize.STRING, },
  password: { type: Sequelize.STRING, },
  facebook_id: { type: Sequelize.STRING, },
  first_name: { type: Sequelize.STRING, },
  last_name: { type: Sequelize.STRING, },
  birthday: { type: Sequelize.DATE, },
  date_time: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, },
});

module.exports = User;
