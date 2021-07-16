const express = require('express');
const shoutoutController = require('../controllers/shoutoutController.js');

const router = express.Router();

/*
 * pulling shoutouts to homepage
 */
// retrieve shoutouts so they can be displayed in the chat history 
// in order of newest to oldest
router.get('/', shoutoutController.getShoutouts, (req, res) =>
  res.status(200).json(res.locals.shoutouts)
);

/*
 * posting shoutouts
 */
// when the user posts a shoutout, should add to the chat history
// (incrementing the points of the user happens elsewhere)
router.post('/', shoutoutController.postShoutout, (req, res) =>
  res.status(200).end('shoutout posted')
);

module.exports = router;
