import express, { Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('My Express Server using TypeScript');
});

app.get('/new-route', (req: Request, res: Response) => {
  res.send('This is a new route - using TypeScript');
});

app.get('/products', (req: Request, res: Response) => {
  const products = [];
  const { size } = req.query;
  const limit = size ? parseInt(size as string, 10) : 10;
  
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});

app.get('/products/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product X',
    price: 2000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req: Request, res: Response) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.get('/users', (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send(`There aren't parameters`);
  }
});

app.listen(port, () => {
  console.log(`App Node with TypeScript running at port ${port}`);
});
