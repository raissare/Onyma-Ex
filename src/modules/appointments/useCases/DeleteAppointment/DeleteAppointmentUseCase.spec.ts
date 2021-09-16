import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import DeleteAppointmentUseCase from './DeleteAppointmentUseCase';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let deleteAppointmentUseCase: DeleteAppointmentUseCase;

describe('DeleteAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    deleteAppointmentUseCase = new DeleteAppointmentUseCase(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to delete a appointment', async () => {
    const appointment = await fakeAppointmentsRepository.create({
      address: 'any',
      patientName: 'any',
      dateTime: 'any',
      state: 'closed',
    });

    await deleteAppointmentUseCase.execute(appointment.id);

    const searchDeletedAppointment = await fakeAppointmentsRepository.findById(
      appointment.id,
    );

    expect(searchDeletedAppointment).toBe(null);
  });
});
