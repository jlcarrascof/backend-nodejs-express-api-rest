const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My Express Server using JavaScript');
});

app.get('/new-route', (req, res) => {
  res.send('This is a new route - using JavaScript');
})

app.get('/products', (req, res) => {

  const products = [];

  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

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

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

// Query params

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send(`There aren't parameters`);
  }
})

app.listen(port, () => {
  console.log('App Node with JavaScript running at port ' + port);
});

