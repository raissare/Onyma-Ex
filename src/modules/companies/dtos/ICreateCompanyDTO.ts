import ICompanyDTO from "./ICompanyDTO";

type ICreateCompanyDTO = Omit<ICompanyDTO, 'id'>;

export default ICreateCompanyDTO;