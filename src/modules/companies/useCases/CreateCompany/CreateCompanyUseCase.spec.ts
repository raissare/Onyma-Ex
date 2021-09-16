import FakeCompaniesRepository from "@modules/companies/repositories/fakes/FakeCompaniesRepository";
import CreateCompanyUseCase from "./CreateCompanyUseCase";

let fakeCompaniesRepository: FakeCompaniesRepository;
let createCompanyUseCase: CreateCompanyUseCase;

describe('CreateCompany', () => {
    beforeEach(() => {
        fakeCompaniesRepository = new FakeCompaniesRepository();

        createCompanyUseCase = new CreateCompanyUseCase(
            fakeCompaniesRepository
        );
    });

    it('should be able to create a new company', async () => {
        const company = await createCompanyUseCase.execute({
            nome: 'any_nome',
            razaoSocial: 'any_razaoSocial',
            cnpj: 'any_cnpj',
            grupo: "any_grupo",
            grauDeRisco: 'any_grau',
            address: {
                bairro: 'any_bairro',
                cep: 'any_cep',
                cidade: 'any_cidade',
                complemento: 'any_complemento',
                endereco: 'any_endereco',
                uf: 'any_uf'

            }
        });

        expect(company).toHaveProperty('id');
        expect(company.nome).toBe('any_nome');
        expect(company.razaoSocial).toBe('any_razaoSocial');
        expect(company.cnpj).toBe('any_cnpj');
        expect(company.grupo).toBe('any_grupo');
        expect(company.grauDeRisco).toBe('any_grau');
        expect(company.address.bairro).toBe('any_bairro');
        expect(company.address.cep).toBe('any_cep');
        expect(company.address.cidade).toBe('any_cidade');
        expect(company.address.complemento).toBe('any_complemento');
        expect(company.address.endereco).toBe('any_endereco');
        expect(company.address.uf).toBe('any_uf');

    });
});


