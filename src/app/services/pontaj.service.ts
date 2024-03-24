import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PontajModel } from '../models/pontaj';

@Injectable({
  providedIn: 'root'
})
export class PontajService {
  private url: string = "http://localhost:8080/aplicatie_salarizare/pontaj";

  constructor(private httpClient: HttpClient) { }

  getPontaj(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  addPontaj(request: PontajModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  updatePontaj(marca: number, request: PontajModel): Observable<any>{
    console.log(this.url + "/" + marca);
    return this.httpClient.put(this.url + "/" + marca, request);
  }

  deletePontaj(marca: number): Observable<any>{
    return this.httpClient.delete(this.url + "/" + marca);
  }

}
