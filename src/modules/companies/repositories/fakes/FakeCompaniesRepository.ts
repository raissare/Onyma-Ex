import { uuid } from 'uuidv4';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRespository';
import ICreateCompanyDTO from '@modules/companies/dtos/ICreateCompanyDTO';
import IUpdateCompanyDTO from '@modules/companies/dtos/IUpdateCompanyDTO';

class FakeCompaniesRepository implements ICompaniesRepository {
    private companies: ICompanyDTO[] = [];

    public async create({
        nome,
        razaoSocial,
        cnpj,
        grupo,
        grauDeRisco,
        address,
    }: ICreateCompanyDTO): Promise<ICompanyDTO> {
        const company = {
            id: uuid(),
            nome,
            razaoSocial,
            cnpj,
            grupo,
            grauDeRisco,
            address
        };

        this.companies.push(company);

        return company;
    }

    public async findById(id: string): Promise<ICompanyDTO | null> {
        const company = this.companies.find(
            companyStored => companyStored.id == id,
        );

        if (!company) return null;

        return company;
    }

    public async findAll(): Promise<ICompanyDTO[]> {
        return this.companies;
    }

    public async update(company: IUpdateCompanyDTO): Promise<ICompanyDTO> {
        const updateIndex = this.companies.findIndex(
            updateCompany => updateCompany.id == company.id,
        );

        this.companies[updateIndex] = Object.assign(
            this.companies[updateIndex],
            this.companies
        );

        return this.companies[updateIndex];
    }

    public async delete(id: string): Promise<void> {
        this.companies = this.companies.filter(
            company => company.id != id,
        );
    }

}

export default FakeCompaniesRepository;
