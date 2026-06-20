import express, { Request, Response } from 'express';
import ProductsService from './../services/product.service';

const router = express.Router();
const service = new ProductsService();

router.get('/', (req: Request, res: Response) => {
  const products = service.find();
  const { size } = req.query;
  
  res.json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id as string;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

export default router;
