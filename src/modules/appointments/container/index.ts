import { container } from 'tsyringe';

import FirebaseAppointmentRepository from '@modules/appointments/infra/firebase/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  FirebaseAppointmentRepository,
);
