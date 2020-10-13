import { Router } from 'express';

import OrphanageController from './controllers/OrfanagesController';

const routes = Router();

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', OrphanageController.create);

export default routes;