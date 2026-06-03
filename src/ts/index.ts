import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('My Express Server using TypeScript');
});

app.get('/new-route', (req: Request, res: Response) => {
  res.send('This is a new route - using TypeScript');
});

app.get('/products', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Product 1', price: 1000 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 3000 },
    { id: 4, name: 'Product 4', price: 4000 },
    { id: 5, name: 'Product 5', price: 5000 }
  ]);
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

app.listen(port, () => {
  console.log(`App Node with TypeScript running at port ${port}`);
});
