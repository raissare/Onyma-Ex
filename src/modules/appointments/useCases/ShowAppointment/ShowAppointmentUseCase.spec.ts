import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ShowAppointmentUseCase from './ShowAppointmentUseCase';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let showAppointmentUseCase: ShowAppointmentUseCase;

describe('ShowAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    showAppointmentUseCase = new ShowAppointmentUseCase(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to show a appointment', async () => {
    const appointmentCreated = await fakeAppointmentsRepository.create({
      address: 'any',
      patientName: 'any',
      dateTime: 'any',
      state: 'closed',
    });

    const appointments = await showAppointmentUseCase.execute(
      appointmentCreated.id,
    );

    expect(appointments).toEqual(appointmentCreated);
  });
});
