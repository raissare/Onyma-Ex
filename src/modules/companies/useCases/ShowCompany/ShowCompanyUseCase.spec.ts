import FakeCompaniesRepository from "@modules/companies/repositories/fakes/FakeCompaniesRepository";
import ShowCompanyUseCase from "./ShowCompanyUseCase";

let fakeCompaniesRepository: FakeCompaniesRepository;
let showCompanyUseCase: ShowCompanyUseCase;

describe('ShowCompany', () => {
    beforeEach(() => {
        fakeCompaniesRepository = new FakeCompaniesRepository();

        showCompanyUseCase = new ShowCompanyUseCase(
            fakeCompaniesRepository
        );
    });

    it('should be able to show a company', async () => {
        const companyCreated = await fakeCompaniesRepository.create({
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

        const company = await showCompanyUseCase.execute(
            companyCreated.id
        );

        expect(company).toEqual(companyCreated);
    });
});