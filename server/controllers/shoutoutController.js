import db from '../db/db';
import queries from '../db/queries';

const shoutoutController = {};

/**
 * getShoutouts - retrieve all shoutouts from the database and store them into res.locals
 * before moving on to next middleware.
 */

shoutoutController.getShoutouts = (req, res, next) => {
  Shoutout.find({}, (err, shoutouts) => {
    if (err) {
      return next(`Error in shoutoutController.getShoutouts: ${JSON.stringify(err)}`);
    }
    // console.log(shoutouts);
    res.locals.shoutouts = shoutouts;
    return next();
  });
};

/**
 * createShoutout - create and save a new shoutout into the database.
 */
shoutoutController.postShoutout = (req, res, next) => {
  // write code here
  // const { username, password } = req.body;
  Shoutout.create(req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.end('error from createShoutout');
      // res.render('./../client/signup', { error: err });
    } else {
      console.log(data);
      // data.save();
      return next();
    }
  });
};

module.exports = shoutoutController;
