require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 4000 || process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/api/users', require('./routes/user'));

db.end();

app.listen(port, () => console.log(`port is on ${port}`));
