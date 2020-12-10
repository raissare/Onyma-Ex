import { PartialRequireOne } from '@shared/helpers/types/PartialRequireOne';
import IAppointmentDTO from './IAppointmentDTO';

type IUpdateAppointmentDTO = PartialRequireOne<IAppointmentDTO, 'id'>;

export default IUpdateAppointmentDTO;
