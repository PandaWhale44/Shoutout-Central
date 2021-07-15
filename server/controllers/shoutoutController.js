import db from '../db/db';
import q from '../db/queries';

const shoutoutController = {};

/**
 * getShoutouts - retrieve all shoutouts from the database and store them into res.locals
 * before moving on to next middleware.
 */

shoutoutController.getShoutouts = async (req, res, next) => {
  const shoutouts = await db.query(q.getShoutouts).catch((err) => console.error(err));
  res.locals.shoutouts = shoutouts.rows;
  return next();
};

/**
 * createShoutout - create and save a new shoutout into the database.
 */
shoutoutController.postShoutout = (req, res, next) => {
  const { contents, sender_id, recipient_id, timestamp } = req.body.shoutout;
  const valueObj = { contents, sender_id, recipient_id, timestamp };
  const value = Object.values(valueObj);

  db.query(q.addShoutout, value, (err, result) => {
    if (err) return next(err);
    return next();
  });
};

module.exports = shoutoutController;
