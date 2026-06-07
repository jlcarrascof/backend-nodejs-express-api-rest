import express, { Express } from 'express';
import productsRouter from './products.router';
import usersRouter from './users.router';
import categoriesRouter from './categories.router';

function routerApi(app: Express) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

export default routerApi;
