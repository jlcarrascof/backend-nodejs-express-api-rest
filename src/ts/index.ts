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
  res.json({
    name: 'Product 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log(`App Node with TypeScript running at port ${port}`);
});
