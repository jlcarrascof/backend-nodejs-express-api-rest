import express, { Request, Response, NextFunction } from 'express';
import ProductsService from './../services/product.service';
import { validatorHandler } from './../middlewares/validator.handler';
import { createProductSchema, updateProductSchema, getProductSchema } from './../schemas/product.schema';
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

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createProductSchema, 'body'), async (req: Request, res: Response) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const rpta = await service.delete(id);
  res.json(rpta);
});

export default router;
