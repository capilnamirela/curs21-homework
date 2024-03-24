import { Routes } from '@angular/router';
import { DateAngajatiComponent } from './date-angajati/date-angajati.component';
import { InitializareAplicatieComponent } from './initializare-aplicatie/initializare-aplicatie.component';
import { DateAngajareComponent } from './date-angajare/date-angajare.component';
import { DateSalarialeComponent } from './date-salariale/date-salariale.component';
import { PontajComponent } from './pontaj/pontaj.component';
import { FluturasComponent } from './fluturas/fluturas.component';


export const routes: Routes = [
    {path: 'aplicatie_salarizare', component: InitializareAplicatieComponent},
    {path: 'aplicatie_salarizare/date_personale', component: DateAngajatiComponent},
    {path: 'aplicatie_salarizare/date_angajare_unitate', component: DateAngajareComponent},
    {path: 'aplicatie_salarizare/date_salariale', component: DateSalarialeComponent},
    {path: 'aplicatie_salarizare/pontaj', component: PontajComponent},
    {path: 'aplicatie_salarizare/date_salariale/fluturasi', component: FluturasComponent},
]
  
