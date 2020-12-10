import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import UpdateAppointmentUseCase from './UpdateAppointmentUseCase';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let updateAppointmentUseCase: UpdateAppointmentUseCase;

describe('UpdateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    updateAppointmentUseCase = new UpdateAppointmentUseCase(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to update a appointment', async () => {
    const appointment = await fakeAppointmentsRepository.create({
      address: 'any',
      patientName: 'any',
      dateTime: 'any',
      state: 'closed',
    });

    await fakeAppointmentsRepository.create(appointment);

    const appointmentUpdated = await updateAppointmentUseCase.execute({
      id: appointment.id,
      address: 'new_address',
      patientName: 'new_patientName',
    });

    expect(appointmentUpdated.id).toBe(appointment.id);
    expect(appointmentUpdated.address).toBe('new_address');
    expect(appointmentUpdated.patientName).toBe('new_patientName');
  });
});
