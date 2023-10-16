import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { Title } from '@angular/platform-browser';

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
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      this.appointments.push(newAppointment);

      (this.newAppointmentTitle = ''), (this.newAppointmentDate = new Date());
      localStorage.setItem('appointment', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointment', JSON.stringify(this.appointments));
  }
}
