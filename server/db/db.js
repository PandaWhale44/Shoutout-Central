require('dotenv').config();
const { Pool } = require('pg');

// import * as pg from 'pg';
// const { Pool } = pg;

const { PG_URI } = process.env;

const pool = new Pool({
  connectionString: PG_URI,
});

// pool.query('./createTables.sql', (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
