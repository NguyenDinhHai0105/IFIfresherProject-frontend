import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { TestService } from '../services/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  i : number;
  test !: Test;
  test_name !: string;
  test_time !: number;
  number_of_questions !: number;
  questions: Question[] = new Array();
  numberQuestions = new Array();
  number_input!: number; // số lượng câu hỏi nhập vào

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    console.log(this.questions);
  }

  addQuestion($event, index: number) {
     this.questions[index]=$event;
  }

  submit() {
    this.test = new Test(this.test_name, this.test_time = 0, this.number_of_questions = 0, this.questions);
    this.testService.addTest(this.test).subscribe(data => {      
    });
    window.alert("Lưu bài thi thành công!");
    console.log(this.test);
  }

  setNumberOfQuestions(number_input: number) { 
    if (number_input > 25) {
      number_input = 25;
    } else if (number_input < 0) {
      number_input = 0;
    }
    this.number_of_questions = number_input;
    this.numberQuestions = new Array(number_input);
  }

}
