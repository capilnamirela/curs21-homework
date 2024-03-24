import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FluturasService {
  private url: string = "http://localhost:8080/aplicatie_salarizare/date_salariale/fluturasi";

  constructor(private httpClient: HttpClient) { }

  getFluturasi(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  getFluturasByMarca(marca: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${marca}`);
  }

}