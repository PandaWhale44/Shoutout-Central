const express = require('express');
const userController = require('../controllers/userController.js');
// const sessionController = require('../controllers/sessionController.js');

const router = express.Router();

router.get('/', userController.getAllUsers, (req, res) => res.status(200).json(res.locals.users));

router.post('/', userController.verifyUser, (req, res) => {
  console.log('signin sucessful');
  res.locals.currentUser = { ...req.body };
  return res.redirect('../../client/components/HomePage').json(res.locals.currentUser);
});

router.patch('/', userController.editUser, (req, res) => {
  res.locals.updateUser = req.body;
  console.log('update successful');
  return res.status(200).json(res.locals.updateUser);
});

/**
 * signup
 */

router.post('/signup', userController.createUser, (req, res) => {
  console.log('signup successful');
  res.locals.currentUser = { ...req.body };
  res.redirect('../../client/components/signin').json(res.locals.currentUser);
});

module.exports = router;
