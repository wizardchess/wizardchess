const { Sequelize, database } = require('./../config');
const User = require('./users');

const Achievement = database.define('achievement', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
  user_id: { type: Sequelize.INTEGER, references : { model: User, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE, }, },
  achievement_name: { type: Sequelize.STRING, },
  date_time: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, },
});

module.exports = Achievement;
