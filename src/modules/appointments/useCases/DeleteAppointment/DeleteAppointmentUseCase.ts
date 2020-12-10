import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';

@injectable()
class DeleteAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.appointmentsRepository.delete(id);
  }
}

export default DeleteAppointmentUseCase;
