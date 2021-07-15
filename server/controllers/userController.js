import db from '../db/db';
import q from '../db/queries';

const bcrypt = require('bcryptjs');
// TODO: reset to 14 for production release.
const SALT_WORK_FACTOR = 6; // set low for testing.

const userController = {};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

userController.getUsers = (req, res, next) => {
  db.query(q.getUsers, (err, data) => {
    if (err) return next(err);
    console.log(data);
    res.locals.users = data.rows;
    return next();
  });
};

/**
 * createUser - create and save a new User into the database.
 */
// const submitted_info = docuemnt.addEventListener('submit', 'form').values
// check if the inputted username already exists in the table

userController.addUser = async (req, res, next) => {
  const { email, password, firstName, lastName, affiliation } = req.body;
  if (!email || !password) return next('empty field in userController.addUser');
  const valueObj = { email, password, firstName, lastName, affiliation };
  const value = Object.values(valueObj);

  value.password = await bcrypt.hash(value.password, SALT_WORK_FACTOR).catch((err) => next(err));

  db.query(q.addUser, value, (err, result) => {
    if (err) return next(err);
    console.log(result);
    return next();
  });
};

userController.editUser = async (req, res, next) => {
  const { email, password, firstName, lastName, affiliation, points } = req.body;
  const valueObj = { email, password, firstName, lastName, affiliation, points };
  const value = Object.values(valueObj);

  if (password)
    value.password = await bcrypt.hash(value.password, SALT_WORK_FACTOR).catch((err) => next(err));
  db.query(q.editUser, value, (err, result) => {
    if (err) return next(err);
    console.log(result);
    return next();
  });
};

/**
 * verifyUser - Obtain username and password from the request query, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */

userController.verifyUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return next('empty field in userController.verifyUser');
  const userData = await db.query(q.getUser, email).catch((err) => next(err));
  const [userId, hashedPassword] = [userData._id, userData.password];

  bcrypt.compare(password, hashedPassword, (err, result) => {
    if (err || !result) res.redirect('./../client/signin', { error: 'wrong password' });
    res.locals.currentUser = { userId, email };
    res.status(200).send('login successful!');
    return next();
  });
};

module.exports = userController;
