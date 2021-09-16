import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentUseCase from './CreateAppointmentUseCase';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentUseCase: CreateAppointmentUseCase;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointmentUseCase = new CreateAppointmentUseCase(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointmentUseCase.execute({
      address: 'any_address',
      dateTime: 'any_date',
      patientName: 'any_name',
      state: 'scheduled',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.address).toBe('any_address');
    expect(appointment.dateTime).toBe('any_date');
    expect(appointment.patientName).toBe('any_name');
    expect(appointment.state).toBe('scheduled');
  });
});
