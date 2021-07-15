require('dotenv').config();
const path = require('path');
const express = require('express');
// const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');
const shoutoutRouter = require('./routes/shoutout');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.resolve(__dirname, '../build')));

/**
 * define route handlers
 */

app.use('/api/user', userRouter);
app.use('/api/shoutout', shoutoutRouter);

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
