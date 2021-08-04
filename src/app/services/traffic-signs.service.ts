import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrafficSigns } from '../traffic-signs';

@Injectable({
  providedIn: 'root'
})
export class TrafficSignsService {

  baseUrl = "http://localhost:8080/";

  url = {
    getTrafficUrl : this.baseUrl + "traffic-signs",
  }

  constructor(
    private http : HttpClient
  ) { }

  getAllTrafficSigns(): Observable<any> {
    return this.http.get<TrafficSigns[]>(`${this.url.getTrafficUrl}`);
  }

  addTrafficSign(sign: TrafficSigns): Observable<any> {
    return this.http.post(this.url.getTrafficUrl, sign);
  }

  updateTrafficSign(sign: TrafficSigns, id: number): Observable<any> {
    return this.http.put(`${this.url.getTrafficUrl}/${id}`, sign);
  }

  deleteTrafficSign(id: number) : Observable<any> {
    return this.http.delete(`${this.url.getTrafficUrl}/${id}`);
  }

}
