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
    let update_appointment: IUpdateAppointmentDTO = { id: data.id };

    if (data.address)
      update_appointment = {
        ...update_appointment,
        address: data.address,
      };
    if (data.patientName)
      update_appointment = {
        ...update_appointment,
        patientName: data.patientName,
      };
    if (data.dateTime)
      update_appointment = {
        ...update_appointment,
        dateTime: data.dateTime,
      };
    if (data.state)
      update_appointment = {
        ...update_appointment,
        state: data.state,
      };

    const appointment = await this.appointmentsRepository.update(
      update_appointment,
    );

    return appointment;
  }
}

export default UpdateAppointmentUseCase;
