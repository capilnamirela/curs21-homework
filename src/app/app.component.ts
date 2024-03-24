import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DateAngajatiComponent} from './date-angajati/date-angajati.component';
import { DateAngajareComponent} from './date-angajare/date-angajare.component';
import { DateSalarialeComponent } from './date-salariale/date-salariale.component';
import { PontajComponent } from './pontaj/pontaj.component';
import { FluturasComponent } from './fluturas/fluturas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, DateAngajatiComponent, DateAngajareComponent, DateSalarialeComponent, PontajComponent, FluturasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salary-app';
}
