require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');
const shoutoutRouter = require('./routes/shoutout');
const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/**
 * define route handlers
 */

app.use('/api/user', userRouter);
app.use('/api/shoutout', shoutoutRouter);

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.resolve(__dirname, '../build')));

// TODO: move api key to .env file

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', userController.verifyUser, (req, res) => {
  res.status(200).end('../client/secret', { currentUser: res.locals.currentUser });
});

app.get('/sign-up', userController.addUser, (req, res) => {
  res.status(200).end('../client/secret', { currentUser: res.locals.currentUser });
});

/**
 * 404 handler
 */
app.use('*', (req, res) => res.status(404).send('Not Found'));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  if (err) console.error(err);
  return res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
