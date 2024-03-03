import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaryComponent } from './salary/salary.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaryComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salary-app';
}
