import { Router } from 'express';

import ListShipsService from '../services/ListShipsService';

const questionsRouter = Router();

questionsRouter.get('/', async (request, response) => {
  const getShips = new ListShipsService();
  const ships = await getShips.execute();
  return response.render('ships', { ships });
});

questionsRouter.get('/json', async (request, response) => {
  const getShips = new ListShipsService();
  const ships = await getShips.execute();
  return response.json(ships);
});
export default questionsRouter;
