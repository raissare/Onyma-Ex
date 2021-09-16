import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompaniesRespository from '@modules/companies/repositories/ICompaniesRespository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

@injectable()
class ShowCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompaniesRespository,
    ) { }

    async execute(id: string): Promise<ICompanyDTO | null> {
        const company = await this.companiesRepository.findById(id);

        return company;
    }
}

export default ShowCompanyUseCase;