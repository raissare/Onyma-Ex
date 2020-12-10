import { Router } from 'express';

import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';

const appointmentsController = new AppointmentsController();

const appointmentsRouter = Router();

appointmentsRouter.get('/', appointmentsController.index);
appointmentsRouter.get('/:id', appointmentsController.show);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.post('/:id', appointmentsController.update);

appointmentsRouter.delete('/:id', appointmentsController.delete);

export default appointmentsRouter;
