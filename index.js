const express = require('express');
const app = express();
const path = require('path');

const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  //check
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
