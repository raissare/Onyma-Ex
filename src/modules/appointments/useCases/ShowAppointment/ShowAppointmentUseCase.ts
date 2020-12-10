import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

@injectable()
class ShowAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentRepository,
  ) {}

  async execute(id: string): Promise<IAppointmentDTO | null> {
    const appointment = await this.appointmentsRepository.findById(id);

    return appointment;
  }
}

export default ShowAppointmentUseCase;
