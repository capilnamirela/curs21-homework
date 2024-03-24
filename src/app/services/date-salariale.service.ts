import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateSalarialeModel } from '../models/dateSalariale';

@Injectable({
  providedIn: 'root'
})
export class DateSalarialeService {
  private url: string = "http://localhost:8080/aplicatie_salarizare/date_salariale";

  constructor(private httpClient: HttpClient) { }

  getDateSalariale(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  addDateSalariale(request: DateSalarialeModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  updateDateSalariale(marca: number, request: DateSalarialeModel): Observable<any>{
    console.log(this.url + "/" + marca);
    return this.httpClient.put(this.url + "/" + marca, request);
  }

  deleteDateSalariale(marca: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + marca);
  }

}
