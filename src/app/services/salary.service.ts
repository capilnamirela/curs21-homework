import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpClient: HttpClient) { }

  getDateAngajareUnitate(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/aplicatie_salarizare/date_angajare_unitate")
  }


}
