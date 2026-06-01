import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('My Express Server using TypeScript');
});

app.listen(port, () => {
  console.log(`App Node with TypeScript running at port ${port}`);
});
