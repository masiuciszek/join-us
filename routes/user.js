const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  const q = 'SELECT COUNT(*) as count from users';
  db.query(q, (err, r) => {
    if (err) throw err;
    const { count } = r[0];
    res.json({ data: count });
  });
});

router.post('/', async (req, res) => {
  const q = 'INSERT INTO users (email) values(?)';
  db.query(q, [req.body.email], (err, r) => {
    if (err) throw err;
    console.log(r);
    res.json(r);
  });
});
// db.end();

module.exports = router;
