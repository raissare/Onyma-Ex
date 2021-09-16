import { PartialRequireOne } from '@shared/helpers/types/PartialRequireOne';
import ICompanyDTO from './ICompanyDTO';

type IUpdateCompanyDTO = PartialRequireOne<ICompanyDTO, 'id'>;

export default IUpdateCompanyDTO;