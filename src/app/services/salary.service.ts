import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpClient: HttpClient) { }

  getDatePersonale(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/angajati/datePersonale")
  }

  getDateAngajareUnitate(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/angajati/dateAngajareUnitate")
  }


}
