// models
const Users = require('./models/users');
const Achievements = require('./models/achievements');
const Invitations = require('./models/invitations');
const Games = require('./models/games');
const Friends = require('./models/friends');
const Messages = require('./models/messages');
const Comments = require('./models/comments');
// database configuration
const { database } = require('./config');

module.exports = database;
