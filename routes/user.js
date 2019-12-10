const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(' <h1>Hello Master</h1> ');
});

router.get('/random-num', (req, res) => {
  const randNum = Math.floor(Math.random() * 100) + 1;
  res.send(` <h1>The Random num is ${randNum} </h1> `);
});
router.get('/name', (req, res) => {
  const { name } = req.query;
  const { age } = req.query;
  res.send(` <h1>Welcome  ${name} your age is ${age} </h1> `);
});

module.exports = router;
