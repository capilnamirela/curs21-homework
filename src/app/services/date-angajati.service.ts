import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateAngajatiModel } from '../models/dateAngajati';

@Injectable({
  providedIn: 'root'
})
export class DateAngajatiService {
  private url: string = "http://localhost:8080/aplicatie_salarizare/date_personale";

  constructor(private httpClient: HttpClient) { }

  getDatePersonaleAngajati(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  addDatePersonaleAngajat(request: DateAngajatiModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  updateDateAngajati(marca: number, request: DateAngajatiModel): Observable<any>{
    console.log(this.url + "/" + marca);
    return this.httpClient.put(this.url + "/" + marca, request);
  }

  deleteAngajat(marca: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + marca);
  }

}
