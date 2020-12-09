import IAppointmentDTO from './IAppointmentDTO';

type IUpdateAppointmentDTO = Partial<Omit<IAppointmentDTO, 'id'>> &
  Pick<IAppointmentDTO, 'id'>;

export default IUpdateAppointmentDTO;
