const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', userController.getAllUsers, (req, res) => res.status(200).json(res.locals.users));
// verify if the user exists in the database and after successful log in
// redirects to the home page
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
// allows the fields of the user to be updated and edited
// (specifically the method to increment points after receiving shoutout can be used here)
router.patch('/', userController.editUser, (req, res) => {
  res.locals.updateUser = req.body;
  console.log('update successful');
  return res.status(200).json(res.locals.updateUser);
});
// set cookies for persistent id so you will still be logged in even if you close the session
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
// after creating an account, the user will get added to the database 
// and then will be redirected to log in with their new account information
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
