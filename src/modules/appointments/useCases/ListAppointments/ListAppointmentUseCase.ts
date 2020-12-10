import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

@injectable()
class ListAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentRepository,
  ) {}

  async execute(): Promise<IAppointmentDTO[]> {
    const appointment = await this.appointmentsRepository.findAll();

    return appointment;
  }
}

export default ListAppointmentUseCase;
