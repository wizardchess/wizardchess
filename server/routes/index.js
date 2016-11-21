const router = require('express').Router();
const { getUserByUsername } = require('./../database/controllers/users');

router.get('/users', (req, res) => {
  getUserByUsername(req, res);
});

module.exports = router;
