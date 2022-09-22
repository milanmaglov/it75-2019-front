import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TIM_URI } from '../constants';
import { Tim } from '../models/tim';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  constructor(private httpClient: HttpClient) { }

  public getAllTim(): Observable<any>{
    return this.httpClient.get(`${TIM_URI}`);
  }

  public insertTim(tim: Tim): Observable<any> {
    tim.id = 150;
    return this.httpClient.post(`${TIM_URI}`, tim);
  }

  public updateTim(tim: Tim): Observable<any> {
    return this.httpClient.put(`${TIM_URI}`, tim);
  }

  public deleteTim(id: number): Observable<any> {
    return this.httpClient.delete(`${TIM_URI}/${id}`);
  }
}
