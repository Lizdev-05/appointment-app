import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointment = localStorage.getItem('appointment');

    this.appointments = savedAppointment ? JSON.parse(savedAppointment) : [];
  }

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
