const Sequelize = require('sequelize');
const User = require('./../models/users')

const getUserByQuery = (req, res) => {
  console.log(req.query);
  User.findOne({ where: req.query })
      .then((user) => {
        res.json(user);
      })
      .catch(err => console.log(`Error:\n${err}`));
}

module.exports = {
  getUserByQuery
}
