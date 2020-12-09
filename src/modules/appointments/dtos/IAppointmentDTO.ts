export default interface IAppointmentDTO {
  id: string;
  address: string;
  patientName: string;
  dateTime: string;
  state: 'scheduled' | 'closed' | 'canceled';
}
