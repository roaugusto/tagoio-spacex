import 'reflect-metadata';

import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const PORT = process.env.PORT || 3333;

const startServer = async (): Promise<void> => {
  const app = express();
  const publicPath = path.resolve(__dirname, '..', 'public');
  app.use(express.static(publicPath));

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  const server = createServer(app);

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  server.listen(PORT, () => {
    console.log('🚀 Server started on port', PORT);
  });
};

startServer();
