import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';
import IUpdateAppointmentDTO from '@modules/appointments/dtos/IUpdateAppointmentDTO';

@injectable()
class UpdateAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentRepository,
  ) {}

  async execute(data: IUpdateAppointmentDTO): Promise<IAppointmentDTO> {
    const appointment = await this.appointmentsRepository.update(data);

    return appointment;
  }
}

export default UpdateAppointmentUseCase;
