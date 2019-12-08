const mysql = require('mysql');
require('dotenv').config();
const faker = require('faker');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL DB');
});

const data = [];
for (let i = 0; i < 500; i += 1) {
  data.push([[faker.internet.email()]]);
}

// global.db = db;

const q = 'INSERT INTO users (email) VALUES ?';
db.query(q, [data], (err, res) => {
  if (err) throw err;
  console.log(res);
});

// const q = 'SELECT * FROM users';

// db.query(q, (err, res, fields) => {
//   if (err) {
//     throw err;
//   }
//   console.log(res);
// });

// db.query('SELECT 1 + 1 AS solution', (err, res, fields) => {
//   if (err) {
//     throw err;
//   }
//   console.log('solution is :', res[0].solution);
// });

// db.end();

module.exports = db;
