import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import '@shared/container';
import routes from './routes';
import rateLimiter from './middlewares/rateLimiter';

const app = express();

app.use(rateLimiter);
app.use(express.json());
app.use(routes);

export default app;
