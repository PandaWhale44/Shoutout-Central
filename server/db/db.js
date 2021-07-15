require('dotenv').config();
const { Pool } = require('pg');

// TODO: move to .env
const { PG_URI } = process.env;

const pool = new Pool({
  connectionString: PG_URI,
});

// pool.query('./createTables.sql', (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

// pool.query('SELECT * FROM users LIMIT 10', (err, data) => {
//   if (err) console.error](err);
//   else console.log(data);
// });

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
