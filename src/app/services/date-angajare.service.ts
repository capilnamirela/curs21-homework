import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateAngajareModel } from '../models/dateAngajare';

@Injectable({
  providedIn: 'root'
})
export class DateAngajareService {
  private url: string = "http://localhost:8080/aplicatie_salarizare/date_angajare_unitate";

  constructor(private httpClient: HttpClient) { }

  getDateAngajare(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  addDateAngajare(request: DateAngajareModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  updateDateAngajare(marca: number, request: DateAngajareModel): Observable<any>{
    console.log(this.url + "/" + marca);
    return this.httpClient.put(this.url + "/" + marca, request);
  }

  deleteDateAngajare(marca: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + marca);
  }

}
