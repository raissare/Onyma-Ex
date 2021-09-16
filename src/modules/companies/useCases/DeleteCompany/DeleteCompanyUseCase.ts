import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRespository';

@injectable()
class DeleteCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompaniesRepository,
    ) { }

    async execute(id: string): Promise<void> {
        await this.companiesRepository.delete(id);

    }
}

export default DeleteCompanyUseCase;