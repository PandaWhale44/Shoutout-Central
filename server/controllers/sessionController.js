// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs');

// const db = require('../db/db.js');
// const q = require('../db/queries.js');

// const SALT_WORK_FACTOR = 6; // set low for testing.

// const sessionController = {};

// /**
//  * isLoggedIn - find the appropriate session for this request in the database, then
//  * verify whether or not the session is still valid.
//  */
// sessionController.isLoggedIn = (req, res, next) => {
  
//   console.log(req.get('cookie').search('/ssid=.+[;\\w]/'));
//   Session.find({ cookieId: req.get('cookie').search('/ssid=.+[;\\w]/') }, (err, data) => {
//     console.log(data);
//     if (err || !data || !data.length) return next(err);
//     if (Date.now() - data.createdAt < 30000) return next();
//     res.redirect('./../client/components/signup', { error: 'session expired' });

//   });

//   res.locals.currentUser = req.body;

  
//   if () return next();
//   else res.redirect('/../../client/components/HomePage').json(req.body);


// };

// /**
//  * startSession - create and save a new session token
//  *  into both the database and a cookie in the user's browser.
//  */
// sessionController.startSession = async (req, res, next) => {
//   const ssid = req.rawHeaders[5];
//   const token = await bcrypt.hash(ssid, SALT_WORK_FACTOR);

//   res.cookie('ssid_encrypted', `${token}`, { httpOnly: true, secure: false });
//   console.log(token);

//   db.query(q.getUser, [req.body.email], (err, data) => {
//     if (err) return next(err);
//     console.log(data);
//     res.locals.currentSession = data.rows;
//   });

//   const newSession = new Session({
//     cookieId: res.locals.currentUser.userId,
//   });
//   newSession.save((err, newSession) => {
//     if (err) return next(err);
//     return next();
//   });
// };

// module.exports = sessionController;
