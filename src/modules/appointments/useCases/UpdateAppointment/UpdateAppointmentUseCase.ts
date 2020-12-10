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
    let update_appointemnt: IUpdateAppointmentDTO = { id: data.id };

    if (data.address)
      update_appointemnt = {
        ...update_appointemnt,
        address: data.address,
      };
    if (data.patientName)
      update_appointemnt = {
        ...update_appointemnt,
        patientName: data.patientName,
      };
    if (data.dateTime)
      update_appointemnt = {
        ...update_appointemnt,
        dateTime: data.dateTime,
      };
    if (data.state)
      update_appointemnt = {
        ...update_appointemnt,
        state: data.state,
      };

    const appointment = await this.appointmentsRepository.update(
      update_appointemnt,
    );

    return appointment;
  }
}

export default UpdateAppointmentUseCase;
