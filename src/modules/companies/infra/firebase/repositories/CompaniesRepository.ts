import firebase from "firebase";
import firebaseDatabase from '@shared/infra/firebase';

import { uuid } from "uuidv4";
import ICompanyDTO from "@modules/companies/dtos/ICompanyDTO";

import ICompaniesRepositories from "@modules/companies/repositories/ICompaniesRespository";
import ICreateCompanyDTO from "@modules/companies/dtos/ICreateCompanyDTO";
import IUpdateCompanyDTO from "@modules/companies/dtos/IUpdateCompanyDTO";

class CompaniesRepository implements ICompaniesRepositories {
    private database: firebase.database.Database;

    private url: string;

    constructor() {
        this.database = firebaseDatabase;
        this.url = 'companies/';
    }

    public async create({
        nome,
        razaoSocial,
        cnpj,
        grupo,
        grauDeRisco,
        address,
    }: ICreateCompanyDTO): Promise<ICompanyDTO> {
        const id = uuid();
        const data = {
            id,
            nome,
            razaoSocial,
            cnpj,
            grupo,
            grauDeRisco,
            address,
        };

        await this.database.ref(this.url + id).set(data);

        return Object.assign(data, { id });
    }

    public async findById(id: string): Promise<ICompanyDTO | null> {
        const companySnapshot = await this.database
            .ref(this.url + id)
            .once('value');

        const companyData = companySnapshot.val();

        const company = companyData
            ? Object.assign(companyData, { id })
            : null;

        return company;
    }

    public async findAll(): Promise<ICompanyDTO[]> {
        const companySnapshot = await this.database
            .ref(this.url)
            .once('value');

        const companyData = companySnapshot.val();

        const companiesIds = Object.keys(companyData);

        const companies = companiesIds.map(id => {
            return {
                id,
                ...companyData[id],
            };
        });

        return companies;
    }

    public async update(company: IUpdateCompanyDTO): Promise<ICompanyDTO> {
        const { id } = company;

        await this.database.ref(this.url + id).update(company);

        return Object.assign(company, { id }) as ICompanyDTO;
    }

    public async delete(id: string): Promise<void> {
        await this.database.ref(this.url + id).remove();
    }
}

export default CompaniesRepository;