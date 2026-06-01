const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My Express Server using JavaScript');
});

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

