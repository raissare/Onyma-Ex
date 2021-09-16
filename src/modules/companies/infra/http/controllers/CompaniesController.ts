import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompanyService from '@modules/companies/useCases/CreateCompany/CreateCompanyUseCase';
import DeleteCompanyService from '@modules/companies/useCases/DeleteCompany/DeleteCompanyUseCase';
import ListCompaniesService from '@modules/companies/useCases/ListCompanies/ListCompaniesUseCase';
import ShowCompanyService from '@modules/companies/useCases/ShowCompany/ShowCompanyUseCase';
import UpdateCompanyService from '@modules/companies/useCases/UpdateCompany/UpdateCompanyUseCase';


class CompaniesController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listCompanies = container.resolve(ListCompaniesService);

        const companies = await listCompanies.execute();

        return response.status(200).json(companies);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const ShowCompany = container.resolve(ShowCompanyService);

        const company = await ShowCompany.execute(id);

        return response.status(200).json(company);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { nome, razaoSocial, cnpj, grupo, grauDeRisco, address } = request.body;

        const createCompany = container.resolve(CreateCompanyService);

        const company = await createCompany.execute({
            nome,
            razaoSocial,
            cnpj,
            grupo,
            grauDeRisco,
            address,
        });

        return response.status(200).json(company);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { nome, razaoSocial, cnpj, grupo, grauDeRisco, address } = request.body;

        const updateCompany = container.resolve(UpdateCompanyService);

        const company = await updateCompany.execute({
            id,
            nome,
            razaoSocial,
            cnpj,
            grupo,
            grauDeRisco,
            address
        });

        return response.status(200).json(company);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCompany = container.resolve(DeleteCompanyService);

        await deleteCompany.execute(id);

        return response.status(200).json({ message: 'deleted' })
    }
}

export default CompaniesController;