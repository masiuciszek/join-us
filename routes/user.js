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

/**
 * @param{Object} req
 * @param{Object} res
 */
router.post('/', async (req, res) => {
  // const q = 'INSERT INTO users set ?';
  // db.query(q, [req.body], (err, r) => {
  //   if (err) throw err;
  //   console.log(r);
  //   res.json(r);
  // });
  const person = {
    email: req.body.email,
  };
  // INSERT INTO users (email) values(?)

  db.query('INSERT INTO users SET ?', person, (err, r) => {
    if (err) throw err;
    console.log(r);
    res.json(r);
  });
});
// db.end();

module.exports = router;
