import IAppointmentDTO from './IAppointmentDTO';

type ICreateAppointmentDTO = Omit<IAppointmentDTO, 'id'>;

export default ICreateAppointmentDTO;
