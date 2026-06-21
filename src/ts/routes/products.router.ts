import express, { Request, Response } from 'express';
import ProductsService from './../services/product.service';

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req: Request, res: Response) => {
  const products = await service.find();
  const { size } = req.query;

  res.json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req: Request, res: Response) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const rpta = await service.delete(id);
  res.json(rpta);
});

export default router;
