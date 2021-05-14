import firebase from 'firebase';
import firebaseDatabase from '@shared/infra/firebase';

import { uuid } from 'uuidv4';
import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '@modules/appointments/dtos/IUpdateAppointmentDTO';

class AppointmentsRepository implements IAppointmentsRepository {
  private database: firebase.database.Database;

  private url: string;

  constructor() {
    this.database = firebaseDatabase;
    this.url = 'appointments/';
  }

  public async create({
    address,
    patientName,
    dateTime,
    state,
  }: ICreateAppointmentDTO): Promise<IAppointmentDTO> {
    const id  = uuid();
    const data = {
      id,
      address,
      patientName,
      dateTime,
      state,
    };

    await this.database.ref(this.url + id).set(data);

    return Object.assign(data, { id });
  }

  public async findById(id: string): Promise<IAppointmentDTO | null> {
    const appointmentSnapshot = await this.database
      .ref(this.url + id)
      .once('value');

    const appointmentData = appointmentSnapshot.val();

    const appointment = appointmentData
      ? Object.assign(appointmentData, { id })
      : null;

    return appointment;
  }

  public async findAll(): Promise<IAppointmentDTO[]> {
    const appointmentsSnapshot = await this.database
      .ref(this.url)
      .once('value');

    const appointmentData = appointmentsSnapshot.val();

    const appointmentsIds = Object.keys(appointmentData);

    const appointments = appointmentsIds.map(id => {
      return {
        id,
        ...appointmentData[id],
      };
    });

    return appointments;
  }

  public async update(
    appointment: IUpdateAppointmentDTO,
  ): Promise<IAppointmentDTO> {
    const { id } = appointment;

    await this.database.ref(this.url + id).update(appointment);

    return Object.assign(appointment, { id }) as IAppointmentDTO;
  }

  public async delete(id: string): Promise<void> {
    await this.database.ref(this.url + id).remove();
  }
}

export default AppointmentsRepository;
