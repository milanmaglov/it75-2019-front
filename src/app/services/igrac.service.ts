import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGRAC_FOR_URI, IGRAC_URI } from '../constants';
import { Igrac } from '../models/igrac';

@Injectable({
  providedIn: 'root'
})
export class IgracService {

  constructor(private httpClient: HttpClient) { }

  public getAllIgracByTim(idIgrac: number): Observable<any>{
    return this.httpClient.get(`${IGRAC_FOR_URI}/${idIgrac}`);
  }

  public insertIgrac(igrac: Igrac): Observable<any> {
    igrac.id = 150;
    return this.httpClient.post(`${IGRAC_URI}`, igrac);
  }

  public updateIgrac(igrac: Igrac): Observable<any> {
    return this.httpClient.put(`${IGRAC_URI}`, igrac);
  }

  public deleteIgrac(id: number): Observable<any> {
    return this.httpClient.delete(`${IGRAC_URI}/${id}`);
  }
}
