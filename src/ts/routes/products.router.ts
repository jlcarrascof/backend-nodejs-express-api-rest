import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const products: any[] = [];
  const { size } = req.query;
  
  res.json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send(`I'm a filter`);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Not Found',
    });
  } else {
    res.status(200).json({
      id,
      name: 'Product X',
      price: 2000,
    });
  }
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

export default router;
