import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NACIONALNOST_URI } from '../constants';
import { Nacionalnost } from '../models/nacionalnost';

@Injectable({
  providedIn: 'root'
})
export class NacionalnostService {

  constructor(private httpClient: HttpClient) { }

  public getAllNacionalnost(): Observable<any>{
    return this.httpClient.get(`${NACIONALNOST_URI}`);
  }

  public insertNacionalnost(nacionalnost: Nacionalnost): Observable<any> {
    nacionalnost.id = 150;
    return this.httpClient.post(`${NACIONALNOST_URI}`, nacionalnost);
  }

  public updateNacionalnost(nacionalnost: Nacionalnost): Observable<any> {
    return this.httpClient.put(`${NACIONALNOST_URI}`, nacionalnost);
  }

  public deleteNacionalnost(id: number): Observable<any> {
    return this.httpClient.delete(`${NACIONALNOST_URI}/${id}`);
  }

}

