import IAppointmentDTO from '../dtos/IAppointmentDTO';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IUpdateAppointmentDTO from '../dtos/IUpdateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<IAppointmentDTO>;
  findById(id: string): Promise<IAppointmentDTO | null>;
  findAll(): Promise<IAppointmentDTO[]>;
  update(appointment: IUpdateAppointmentDTO): Promise<IAppointmentDTO>;
  delete(id: string): Promise<void>;
}
