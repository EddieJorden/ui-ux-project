const express = require('express');

const data = require('./sample_data.json');

const api = express();

const HOST = 'localhost';
const PORT = 8888;

api.get('/', (req, res) => {
  res.send('welcome to thie awesome api');
});

api.get('/data', (req, res) => {
  res.status(200).json(data);
});

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
