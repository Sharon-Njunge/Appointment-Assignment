class AppointmentScheduling {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
         this.schedule = {};
       }
addAvailability(date, times) {
 this.schedule[date] = times; }
isAvailable(date, time) {
 return this.schedule[date] && this.schedule[date].includes(time);
}
scheduleAppointment(patient, date, time) {
 if (this.isAvailable(date, time)) {
 const appointment = new Appointment(this, patient, date, time);
 this.schedule[date] = this.schedule[date].filter(slot => slot !== time);
 console.log("Appointment scheduled:", appointment); return appointment; }
  else {
  console.log("Requested time slot is not available.");
 } }
 }
 class Patient {
 constructor(name, email, phone) {
    this.name = name;
    this.contactInfo = { email, phone };
    this.preferences = {}; }
setPreferences(doctor, date, time) {
this.preferences = { doctor, date, time }; } }
class Appointment {
constructor(doctor, patient, date, time) {
this.doctor = doctor;
this.patient = patient;
this.date = date;
this.time = time; } }
let appointments = new AppointmentScheduling("Dr. Brian", "surgeon");
appointments.addAvailability("2024-05-10", ["07:00", "12:00", "15:00"]);
const patients = new Patient("Lavina Nduta", "ndutalavina.com", "34-24-89-66");
patients.setPreferences(appointments, "2024-02-11", "11:00");
appointments.scheduleAppointment(patients, "2024-02-11", "11:00");