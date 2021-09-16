import { container } from 'tsyringe';

import FirebaseCompanyRepository from '@modules/companies/infra/firebase/repositories/CompaniesRepository';
import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRespository';

container.registerSingleton<ICompaniesRepository>(
    'CompaniesRepository',
    FirebaseCompanyRepository,
);

