const router = require('express').Router();
const { getUserByQuery } = require('./../database/controllers/users');

router.get('/users', (req, res) => {
  getUserByQuery(req, res);
});

module.exports = router;
