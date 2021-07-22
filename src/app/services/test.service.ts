import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseURl = "http://localhost:8080/home";
  private random = "http://localhost:8080/api/tests/random";

  constructor(
    private http : HttpClient
  ) { }

  getAllTest(): Observable<Test[]> {
    return this.http.get<Test[]>(`${this.baseURl}`);
  }

  getRandomTest(): Observable<Test> {
    return this.http.get<Test>(`${this.random}`);
  }

  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>(`${this.baseURl}/${id}`);
  }
}
