require('dotenv').config();
const express = require('express');

const db = require('./db');

const app = express();
const port = 4000 || process.env.PORT;

app.use(express.json());

db.end();
app.listen(port, () => console.log(`port is on ${port}`));
