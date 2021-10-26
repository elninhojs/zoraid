import express, { Request, Response, NextFunction } from 'express';
import { search } from './search';

const app = express();
const port = 8082;

app.listen(port, () => {
  console.log(`Server is up and running on ${port}.`);
});
search(app);