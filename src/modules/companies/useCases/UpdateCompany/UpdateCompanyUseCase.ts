import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompaniesRespository from '@modules/companies/repositories/ICompaniesRespository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';
import IUpdateCompanyDTO from '@modules/companies/dtos/IUpdateCompanyDTO';

@injectable()
class UpdateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompaniesRespository,
    ) { }

    async execute(data: IUpdateCompanyDTO): Promise<ICompanyDTO> {
        let update_company: IUpdateCompanyDTO = { id: data.id };

        if (data.address)
            update_company = {
                ...update_company,
                address: data.address,
            };
        if (data.cnpj)
            update_company = {
                ...update_company,
                cnpj: data.cnpj
            };
        if (data.grauDeRisco)
            update_company = {
                ...update_company,
                grauDeRisco: data.grauDeRisco
            };
        if (data.grupo)
            update_company = {
                ...update_company,
                grupo: data.grupo
            };
        if (data.nome)
            update_company = {
                ...update_company,
                nome: data.nome
            };
        if (data.razaoSocial)
            update_company = {
                ...update_company,
                razaoSocial: data.razaoSocial
            };

        const company = await this.companiesRepository.update(
            update_company,
        );

        return company;

    }
}

export default UpdateCompanyUseCase;