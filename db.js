require('dotenv').config();
const mysql = require('mysql');
// const faker = require('faker');

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

// const data = [];
// for (let i = 0; i < 500; i += 1) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }

// const q = 'INSERT INTO users (email, created_at) VALUES ?';

// db.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

global.db = db;

// db.end();

module.exports = db;
