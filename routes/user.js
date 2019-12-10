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
// db.end();

module.exports = router;
