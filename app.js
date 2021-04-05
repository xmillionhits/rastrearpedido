require('dotenv/config');
//require('./database');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);

module.exports = app;
