import ICompanyDTO from "../dtos/ICompanyDTO";
import ICreateCompanyDTO from "../dtos/ICreateCompanyDTO";
import IUpdateCompanyDTO from "../dtos/IUpdateCompanyDTO";

export default interface ICompaniesRespository {
    create(data: ICreateCompanyDTO): Promise<ICompanyDTO>;
    findById(id: string): Promise<ICompanyDTO | null>;
    findAll(): Promise<ICompanyDTO[]>;
    update(company: IUpdateCompanyDTO): Promise<ICompanyDTO>;
    delete(id: string): Promise<void>;
}