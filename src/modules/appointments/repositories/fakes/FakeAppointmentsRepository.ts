import { uuid } from 'uuidv4';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '@modules/appointments/dtos/IUpdateAppointmentDTO';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appointments: IAppointmentDTO[] = [];

  public async create({
    address,
    patientName,
    dateTime,
    state,
  }: ICreateAppointmentDTO): Promise<IAppointmentDTO> {
    const appointment = {
      id: uuid(),
      address,
      patientName,
      dateTime,
      state,
    };

    this.appointments.push(appointment);

    return appointment;
  }

  public async findById(id: string): Promise<IAppointmentDTO | null> {
    const appointment = this.appointments.find(
      appointmentStored => appointmentStored.id === id,
    );

    if (!appointment) return null;

    return appointment;
  }

  public async findAll(): Promise<IAppointmentDTO[]> {
    return this.appointments;
  }

  public async update(
    appointment: IUpdateAppointmentDTO,
  ): Promise<IAppointmentDTO> {
    const updateIndex = this.appointments.findIndex(
      updateAppointment => updateAppointment.id === appointment.id,
    );

    this.appointments[updateIndex] = Object.assign(
      this.appointments[updateIndex],
      appointment,
    );

    return this.appointments[updateIndex];
  }

  public async delete(id: string): Promise<void> {
    this.appointments = this.appointments.filter(
      appointment => appointment.id !== id,
    );
  }
}

export default FakeAppointmentsRepository;
