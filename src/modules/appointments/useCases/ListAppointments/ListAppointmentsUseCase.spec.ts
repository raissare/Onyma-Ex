import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListAppointmentUseCase from './ListAppointmentUseCase';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listAppointmentUseCase: ListAppointmentUseCase;

describe('ListAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listAppointmentUseCase = new ListAppointmentUseCase(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list all appointments', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      address: 'any',
      patientName: 'any',
      dateTime: 'any',
      state: 'closed',
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      address: 'any',
      patientName: 'any',
      dateTime: 'any',
      state: 'closed',
    });

    const appointments = await listAppointmentUseCase.execute();

    expect(appointments).toEqual(
      expect.arrayContaining([appointment1, appointment2]),
    );
  });
});
