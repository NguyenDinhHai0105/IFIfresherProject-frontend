import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseURl = "http://localhost:8080/api/questions";

  constructor(
    private http : HttpClient
  ) { }

  addQuestions(question: Question[]): Observable<any> {
    return this.http.post(this.baseURl, question, httpOptions);
  }

}
