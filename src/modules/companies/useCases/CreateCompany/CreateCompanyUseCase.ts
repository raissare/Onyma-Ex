import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompaniesRepository from "@modules/companies/repositories/ICompaniesRespository";
import ICompanyDTO from "@modules/companies/dtos/ICompanyDTO";
import ICreateCompanyDTO from "@modules/companies/dtos/ICreateCompanyDTO";


@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompaniesRepository,
    ) { }

    async execute(data: ICreateCompanyDTO): Promise<ICompanyDTO> {
        const company = await this.companiesRepository.create(data);

        return company;
    }
}

export default CreateCompanyUseCase;