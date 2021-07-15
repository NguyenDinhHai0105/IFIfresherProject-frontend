import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURl = "http://localhost:8080/home";

  constructor(
    private http : HttpClient
  ) { }

  getAllTest(): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.baseURl}`);
  }

  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>(`${this.baseURl}/${id}`);
  }
}
