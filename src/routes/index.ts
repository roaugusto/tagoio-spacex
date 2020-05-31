import { Router } from 'express';
import shipsRouter from './ships.routes';

const routes = Router();

routes.use('/', shipsRouter);

export default routes;
