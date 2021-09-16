import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import companiesRouter from '@modules/companies/infra/http/routes/companies.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/', companiesRouter);

export default routes;
