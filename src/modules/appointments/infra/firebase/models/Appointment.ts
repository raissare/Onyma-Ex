import { uuid } from 'uuidv4';

import IAppointmentDTO from '@modules/appointments/dtos/IAppointmentDTO';

class Appointment {
  private id: string;

  private address: string;

  private patientName: string;

  private dateTime: string;

  private state: 'scheduled' | 'closed' | 'canceled';

  constructor({
    id = uuid(),
    address,
    patientName,
    dateTime,
    state,
  }: IAppointmentDTO) {
    this.id = id;
    this.address = address;
    this.patientName = patientName;
    this.dateTime = dateTime;
    this.state = state;
  }

  get appoinment(): Partial<IAppointmentDTO> {
    return {
      id: this.id,
      address: this.address,
      patientName: this.patientName,
      dateTime: this.dateTime,
      state: this.state,
    };
  }

  set appoinment({
    id,
    address,
    patientName,
    dateTime,
    state,
  }: Partial<IAppointmentDTO>) {
    if (id) this.id = id;
    if (address) this.address = address;
    if (patientName) this.patientName = patientName;
    if (dateTime) this.dateTime = dateTime;
    if (state) this.state = state;
  }
}

export default Appointment;
