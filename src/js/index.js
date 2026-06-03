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
  res.json([
    {
      id: 1,
      name: 'Product 1',
      price: 1000
    },
    {
      id: 2,
      name: 'Product 2',
      price: 2000
    },
    {
      id: 3,
      name: 'Product 3',
      price: 3000
    },
    {
      id: 4,
      name: 'Product 4',
      price: 4000
    },
    {
      id: 5,
      name: 'Product 5',
      price: 5000
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json(
    {
      id,
      name: 'Product X',
      price: 2000,
    }
  )
})

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

