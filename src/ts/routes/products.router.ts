import express, { Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
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

router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product X',
    price: 2000,
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

export default router;
