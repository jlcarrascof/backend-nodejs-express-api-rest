const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My Express Server using JavaScript');
});

app.get('/new-route', (req, res) => {
  res.send('This is a new route - using JavaScript');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
})

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

