const express = require('express');
const userController = require('../controllers/userController');
// const sessionController = require('../controllers/sessionController');
// const cookieController = require('../controllers/cookieController');

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
    return res.redirect('../../client/components/signin').json(req.body);
  }
);

module.exports = router;
