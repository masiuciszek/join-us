require('dotenv').config();
const express = require('express');
const faker = require('faker');
require('./db');

const app = express();
const port = 4000 || process.env.PORT;

app.use(express.json());

function generateAddress() {
  console.log(faker.address.streetAddress());
}

console.log(generateAddress());

app.listen(port, () => console.log(`port is on ${port}`));
