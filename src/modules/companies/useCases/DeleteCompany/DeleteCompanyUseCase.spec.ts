import FakeCompaniesRepository from "@modules/companies/repositories/fakes/FakeCompaniesRepository";
import DeleteCompanyUseCase from "./DeleteCompanyUseCase";

let fakeCompaniesRepository: FakeCompaniesRepository;
let deleteCompaniesUseCase: DeleteCompanyUseCase;

describe('DeleteCompany', () => {
    beforeEach(() => {
        fakeCompaniesRepository = new FakeCompaniesRepository();

        deleteCompaniesUseCase = new DeleteCompanyUseCase(
            fakeCompaniesRepository
        );
    });

    it('should be able to delete a company', async () => {
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

        await deleteCompaniesUseCase.execute(company.id);

        const searchDeletedCompany = await fakeCompaniesRepository.findById(
            company.id
        );

        expect(searchDeletedCompany).toBe(null);
    });
});