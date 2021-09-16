import { Router } from "express";

import CompaniesController from "../controllers/CompaniesController";

const companiesController = new CompaniesController();

const companiesRouter = Router();

companiesRouter.get('/companies', companiesController.index);
companiesRouter.get('/company/:id', companiesController.show);

companiesRouter.post('/company', companiesController.create);

companiesRouter.put('/company/:id', companiesController.update);

companiesRouter.delete('/company/:id', companiesController.delete);

export default companiesRouter;