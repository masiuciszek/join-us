const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('select count(*) as count from users', (err, r) => {
    if (err) throw err;
    const msg = `We have ${r[0].count} users`;
    res.send(msg);
  });
});
// db.end();

module.exports = router;
