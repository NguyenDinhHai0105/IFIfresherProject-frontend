import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  baseURl = "http://localhost:8080/";
  url = {
    postQuestionUrl: this.baseURl + "api/questions",
    getQuestionByPageUrl: this.baseURl + "api/questions/page",
    updateQuestionUrl: this.baseURl + "api/questions",
    deleteQuestionUrl: this.baseURl + "api/questions",
    searchQuestionUrl: this.baseURl + "api/questions/search",
    addQuesToTestUrl: this.baseURl + "api/questions/add-ques-to-test"
  }

  constructor(
    private http: HttpClient
  ) { }

  addQuestions(question: Question[]): Observable<any> {
    return this.http.post(this.url.postQuestionUrl, question, httpOptions);
  }

  getQuestionsByPage(page: number, size: number): Observable<any> {
    const params = new HttpParams().append("page", page).append("size", size);
    return this.http.get<Question[]>(this.url.getQuestionByPageUrl, { params });
  }

  updateQuestion(question: Question, id: number): Observable<any> {
    return this.http.put(`${this.url.updateQuestionUrl}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete(`${this.url.updateQuestionUrl}/${id}`);
  }

  searchQuestion(input: string): Observable<any> {
    const params = new HttpParams().append("input", input);
    return this.http.get<Question[]>(this.url.searchQuestionUrl, {params});
  }

  addQuesToTest(quesId: number, testId: number): Observable<any> {
    const params = new HttpParams().append("questionId", quesId).append("testId", testId);
    let data ={"quesId": quesId, "testId": testId}
    return this.http.post(this.url.addQuesToTestUrl, data, httpOptions);
    //return this.http.get(this.url.addQuesToTestUrl, {params});
  }
}
