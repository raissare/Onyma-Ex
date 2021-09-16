export default interface ICompanyDTO {
    id: string;
    nome: string;
    razaoSocial: string;
    cnpj: string;
    grupo: string;
    grauDeRisco: string;
    address: {
        bairro: string,
        cep: string,
        cidade: string,
        complemento: string,
        endereco: string,
        uf: string,
    }
}