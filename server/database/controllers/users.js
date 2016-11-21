const Sequelize = require('sequelize');
const User = require('./../models/users')

const getUserByQuery = (req, res) => {
  User.findOne({ where: req.query })
      .then((user) => {
        res.json(user);
      })
      .catch(err => console.log(`Error:\n${err}`));
};

const registerNewUser = (req, res) => {
  User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (user === null) {
          User.create(req.body)
              .then(user => res.json(user));
        } else {
          res.send('Username is taken.');
        }
      });
};

const getAllUsers = (req, res) => {
  User.findAll()
      .then(users => res.json(users));
};

module.exports = {
  getUserByQuery,
  registerNewUser,
  getAllUsers,
}
