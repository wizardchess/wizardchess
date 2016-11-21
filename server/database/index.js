// models
const User = require('./models/users');
const Achievement = require('./models/achievements');
const Invitation = require('./models/invitations');
const Game = require('./models/games');
const Friend = require('./models/friends');
const Message = require('./models/messages');
const Comment = require('./models/comments');
// database configuration
const { database } = require('./config');

const Harry = {
  id: 1,
  username: 'boywholived',
  password: 'expectopatronus',
  facebook_id: 'boywholived',
  first_name: 'Harry',
  last_name: 'Potter',
  avatar_id: 1980,
  birthday: Date.now(),
  date_time: Date.now(),
}

// User.create(Harry);

module.exports = database;
