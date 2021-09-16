import FakeCompaniesRepository from "@modules/companies/repositories/fakes/FakeCompaniesRepository";
import UpdateCompanyUseCase from "./UpdateCompanyUseCase";

let fakeCompaniesRepository: FakeCompaniesRepository;
let updateCompanyUseCase: UpdateCompanyUseCase;

describe('UpdateCompany', () => {
    beforeEach(() => {
        fakeCompaniesRepository = new FakeCompaniesRepository();

        updateCompanyUseCase = new UpdateCompanyUseCase(
            fakeCompaniesRepository
        );
    });

    it('should be able to update a company', async () => {
        const company = await fakeCompaniesRepository.create({
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

        await fakeCompaniesRepository.create(company);

        const companyUpdated = await updateCompanyUseCase.execute({
            id: company.id,
            nome: 'new_nome'
        });

        expect(companyUpdated.id).toBe(company.id);
        expect(companyUpdated.nome).toBe('new_nome');
    });
});