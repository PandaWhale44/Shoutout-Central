const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', userController.getAllUsers, (req, res) => res.status(200).json(res.locals.users));

router.post(
  '/',
  userController.verifyUser,
  // cookieController.setSSIDCookie,
  (req, res) => {
    console.log('signin sucessful');
    res.locals.currentUser = req.body;
    return res.redirect('/../../client/components/homepage').json(req.body);
  }
);

router.patch('/', userController.editUser, (req, res) => {
  res.locals.updateUser = req.body;
  console.log('update successful');
  return res.status(200).json(res.locals.updateUser);
});

// router.get('/setcookie', cookieController.setCookie, (req, res) => res.status(200).end());

// router.get(
//   '/ssidcookie',
//   cookieController.setSSIDCookie,
//   // sessionController.startSession,
//   (req, res) => res.status(200).end()
// );

/**
 * signup
 */

router.post(
  '/signup',
  userController.createUser,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    console.log('signup successful');
    res.locals.currentUser = req.body;
    res.redirect('../../client/components/signin').json(res.locals.currentUser);
  }
);

module.exports = router;
