const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;

// db.query('SELECT 1 + 1 AS solution', (err, res, fields) => {
//   if (err) {
//     throw err;
//   }
//   console.log('solution is :', res[0].solution);
// });

db.end();

module.exports = db;
