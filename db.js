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

module.exports = db;

db.end();
