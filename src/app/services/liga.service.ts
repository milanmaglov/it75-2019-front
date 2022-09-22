import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LIGA_URI } from '../constants';
import { Liga } from '../models/liga';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private httpClient: HttpClient) { }

  public getAllLiga(): Observable<any>{
    return this.httpClient.get(`${LIGA_URI}`);
  }

  public insertLiga(liga: Liga): Observable<any> {
    liga.id = 150;
    return this.httpClient.post(`${LIGA_URI}`, liga);
  }

  public updateLiga(liga: Liga): Observable<any> {
    return this.httpClient.put(`${LIGA_URI}`, liga);
  }

  public deleteLiga(id: number): Observable<any> {
    return this.httpClient.delete(`${LIGA_URI}/${id}`);
  }
}
