import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { TestService } from '../services/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-fix-test',
  templateUrl: './fix-test.component.html',
  styleUrls: ['./fix-test.component.css']
})
export class FixTestComponent implements OnInit {

  test!: Test;
  questions!: Question[];
  question!: Question;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  getFixTest(): void {
    const routeParams = this.route.snapshot.paramMap;
    const testIdFromRoute = Number(routeParams.get('id'));
    this.testService.getTestById(testIdFromRoute).subscribe(data => {
      this.test = data;
      console.log(this.test)
      this.questions = this.test.questions;
      this.getIndex();
      this.question = this.questions[0];
    });
  }

  ngOnInit() {
    this.getFixTest();

  }

  getIndex() {
    let i = 0;
    this.questions.forEach(question => {
      question.index = i;
      i++;
    });
  }
}
