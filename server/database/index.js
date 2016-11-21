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

module.exports = database;
