import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    alert(this.newAppointmentTitle + ' ' + this.newAppointmentDate);
  }
}
