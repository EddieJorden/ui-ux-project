const express = require('express');

const cors = require('cors');

const data = require('./sample_data.json');

const api = express();

api.use(cors());

const HOST = 'localhost';
const PORT = 8888;

api.get('/', (req, res) => {
  res.send('welcome to this awesome api');
});

api.get('/data', (req, res) => {
  res.status(200).json(data);
});

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
