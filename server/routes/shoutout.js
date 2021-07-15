const express = require('express');
const shoutoutController = require('../controllers/shoutoutController');

const router = express.Router();

/*
 * pulling shoutouts to homepage
 */

router.get('/', shoutoutController.getShoutouts, (req, res) =>
  res.status(200).json(res.locals.shoutouts)
);

/*
 * posting shoutouts
 */

router.post('/', shoutoutController.addShoutout, (req, res) =>
  res.status(200).end('shoutout posted')
);

module.exports = router;