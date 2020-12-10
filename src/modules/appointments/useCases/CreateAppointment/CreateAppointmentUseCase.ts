import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

@injectable()
class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentRepository,
  ) {}

  async execute(data: ICreateAppointmentDTO): Promise<IAppointmentDTO> {
    const appointment = await this.appointmentsRepository.create(data);

    return appointment;
  }
}

export default CreateAppointmentUseCase;
