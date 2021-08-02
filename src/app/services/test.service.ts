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
  private addtest = "http://localhost:8080/api/tests/add-tests";
  private testURL = "http://localhost:8080/api/tests";

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

  addTest(test: Test): Observable<any> {
    return this.http.post(this.addtest, test);
  }

  deleteTest(id: number): Observable<Test> {
    return this.http.delete<Test>(`${this.testURL}/${id}`)
  }
}
