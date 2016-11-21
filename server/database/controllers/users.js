const Sequelize = require('sequelize');
const User = require('./../models/users')

const getUserByUsername = (req, res) => {
  User.findOne(req.query)
      .then((user) => {
        res.json(user);
      })
      .catch(err => console.log(`Error:\n${err}`));
}

module.exports = {
  getUserByUsername
}
