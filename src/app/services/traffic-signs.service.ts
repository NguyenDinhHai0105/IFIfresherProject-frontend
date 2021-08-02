import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficSignsService {

  baseUrl = "http://localhost:8080/";

  url = {
    getTraffic : this.baseUrl + "traffic-signs"
  }

  constructor(
    private http : HttpClient
  ) { }

  getAllTrafficSigns(): Observable<any> {
    return this.http.get<any>(`${this.url.getTraffic}`);
  }


}
