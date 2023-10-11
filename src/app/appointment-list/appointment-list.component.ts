import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  appointments: Appointment = {
    id: 1,
    title: 'O ti ye mi ooo',
    date: new Date(),
  };
}
