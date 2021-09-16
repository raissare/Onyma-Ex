import FakeCompaniesRepository from "@modules/companies/repositories/fakes/FakeCompaniesRepository";
import ListCompaniesUseCase from "./ListCompaniesUseCase";

let fakeCompaniesRepository: FakeCompaniesRepository;
let listCompaniesUseCase: ListCompaniesUseCase;

describe('ListCompanies', () => {
    beforeEach(() => {
        fakeCompaniesRepository = new FakeCompaniesRepository();

        listCompaniesUseCase = new ListCompaniesUseCase(
            fakeCompaniesRepository
        );
    });

    it('should be able to list all companies', async () => {
        const company1 = await fakeCompaniesRepository.create({
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

        const company2 = await fakeCompaniesRepository.create({
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

        const companies = await listCompaniesUseCase.execute();

        expect(companies).toEqual(
            expect.arrayContaining([company1, company2]),
        );
    });
});