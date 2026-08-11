import express, { Request, Response } from 'express';
import routerApi from './routes';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('My Express Server using TypeScript');
});

app.get('/new-route', (req: Request, res: Response) => {
  res.send('This is a new route - using TypeScript');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App Node with TypeScript running at port ${port}`);
});
