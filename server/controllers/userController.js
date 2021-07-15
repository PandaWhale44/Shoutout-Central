const bcrypt = require('bcryptjs');

const db = require('../db/db.js');
const q = require('../db/queries.js');

// TODO: reset to 14 for production release.
const SALT_WORK_FACTOR = 6; // set low for testing.

const userController = {};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

userController.getAllUsers = (req, res, next) => {
  db.query(q.getAllUsers, (err, data) => {
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

userController.createUser = async (req, res, next) => {
  const { email, password, firstName, lastName, affiliation } = req.body;
  if (!email || !password) return next('empty field in userController.addUser');
  const valueObj = { email, password, firstName, lastName, affiliation };

  valueObj.password = await bcrypt
    .hash(valueObj.password, SALT_WORK_FACTOR)
    .catch((err) => next(err));
  console.log(valueObj.password);
  valueObj.points = 0;

  const value = Object.values(valueObj);

  db.query(q.addUser, value, (err, result) => {
    if (err) return next(err);
    console.log(result);
    return next();
  });
};

userController.editUser = async (req, res, next) => {
  const { email, points } = req.body;
  db.query(q.updateUser, [email, points], (err, result) => {
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
  const userData = await db.query(q.getUser, [email]).catch((err) => next(err));
  const [userId, hashedPassword] = [userData._id, userData.password];

  bcrypt.compare(password, hashedPassword, (err, result) => {
    if (err || !result) res.redirect(200, '../../client/components/signin');
    console.log(password, hashedPassword);
    res.locals.currentUser = { userId, email };
    return next();
  });
};

module.exports = userController;
