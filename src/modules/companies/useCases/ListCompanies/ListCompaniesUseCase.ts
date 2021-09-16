import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompaniesRespository from '@modules/companies/repositories/ICompaniesRespository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

@injectable()
class ListCompaniesUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompaniesRespository,
    ) { }

    async execute(): Promise<ICompanyDTO[]> {
        const companies = await this.companiesRepository.findAll();

        return companies;
    }

}

export default ListCompaniesUseCase;