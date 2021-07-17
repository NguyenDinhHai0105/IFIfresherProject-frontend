import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  test !: Test;
  questions !: Question[];
  numberOfButton !: number;
  question !: Question;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  getDetailTest(): void {
    const routeParams = this.route.snapshot.paramMap;
    const testIdFromRoute = Number(routeParams.get('id'));
    this.testService.getTestById(testIdFromRoute).subscribe(data => {
      console.log(data);
      this.test = data;
      this.questions = this.test.questions;
      console.log(this.questions);
      this.chooseQuestion();
    });
  }

  ngOnInit(): void {
    this.getDetailTest();
  }

  chooseQuestion(index = 0) {
    this.question = this.questions[index];
  }

  onclick(char : string){
    this.question.select= char ;
  }

  check(char : string){
    if(this.question.select==char){
      return true;
    }
    return false;
  }

  goToNextQuest() {

  }

  goToPreviousQuest() {

  }

}
