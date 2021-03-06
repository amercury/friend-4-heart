const express = require('express');

const router = express.Router();
const { User } = require('../models/models');

/* POST login page. */
router.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user.password && user.password === req.body.password) {
    req.session.username = user.username;
    req.session.auth = true;
  }
  res.redirect('/');
});

module.exports = router;
