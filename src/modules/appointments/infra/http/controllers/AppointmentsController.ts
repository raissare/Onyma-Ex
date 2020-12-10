import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/useCases/CreateAppointment/CreateAppointmentUseCase';
import DeleteAppointmentService from '@modules/appointments/useCases/DeleteAppointment/DeleteAppointmentUseCase';
import ListAppointmentsService from '@modules/appointments/useCases/ListAppointments/ListAppointmentUseCase';
import ShowAppointmentService from '@modules/appointments/useCases/ShowAppointment/ShowAppointmentUseCase';
import UpdateAppointmentService from '@modules/appointments/useCases/UpdateAppointment/UpdateAppointmentUseCase';

class AppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAppointments = container.resolve(ListAppointmentsService);

    const appointments = await listAppointments.execute();

    return response.status(200).json(appointments);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAppointments = container.resolve(ShowAppointmentService);

    const appointment = await showAppointments.execute(id);

    return response.status(200).json(appointment);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { address, patientName, dateTime, state } = request.body;

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      address,
      patientName,
      dateTime,
      state,
    });

    return response.status(200).json(appointment);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { address, patientName, dateTime, state } = request.body;

    const updateAppointment = container.resolve(UpdateAppointmentService);

    const appointment = await updateAppointment.execute({
      id,
      address,
      patientName,
      dateTime,
      state,
    });

    return response.status(200).json(appointment);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAppointment = container.resolve(DeleteAppointmentService);

    await deleteAppointment.execute(id);

    return response.status(200).json({ message: 'deleted' });
  }
}

export default AppointmentsController;
