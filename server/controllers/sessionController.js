const cookieParser = require('cookie-parser');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  console.log(req.get('cookie').search('/ssid=.+[;\\w]/'));
  Session.find({ cookieId: req.get('cookie').search('/ssid=.+[;\\w]/') }, (err, data) => {
    console.log(data);
    if (err || !data || !data.length) return next(err);
    if (Date.now() - data.createdAt < 30000) return next();
    res.render('./../client/signup', { error: 'session expired' });
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  User.find({ username: req.body.username }, (err, data) => {
    res.locals.user = data[0];
  });
  const newSession = new Session({
    cookieId: res.locals.user._id,
  });
  newSession.save((err, newSession) => {
    if (err) return next(err);
    return next();
  });
};

module.exports = sessionController;
