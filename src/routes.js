import { Router } from 'express';

import customers from './Application/controllers/Controllers.js';

const routes = new Router();

routes.get('/customers', customers.list);
routes.get('/customers/:id', customers.locate);
routes.post('/customers', customers.create);
routes.put('/customers/:id', customers.update);
routes.delete('/customers/:id', customers.destroy);

export default routes;
