const router = require('express').Router();

router.get('/users', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

module.exports = router;
