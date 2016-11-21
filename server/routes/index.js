const router = require('express').Router();
const { getUserByQuery, registerNewUser, getAllUsers } = require('./../database/controllers/users');

router.get('/users', (req, res) => {
  getUserByQuery(req, res);
});

router.post('/users', (req, res) => {
  registerNewUser(req, res);
});

router.get('/allusers', (req, res) => {
  getAllUsers(req, res);
});

module.exports = router;
