// models
const users = require('./models/users');
const achievements = require('./models/achievements');
const invitations = require('./models/invitations');
const games = require('./models/games');
const friends = require('./models/friends');
const messages = require('./models/messages');
const comments = require('./models/comments');
// database configuration
const { database } = require('./config');

module.exports = database;
