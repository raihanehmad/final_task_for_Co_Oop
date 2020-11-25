const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const router = require('./routes/index.js');

app.use(bodyParser.json());

app.use('/', router)

app.listen(port);