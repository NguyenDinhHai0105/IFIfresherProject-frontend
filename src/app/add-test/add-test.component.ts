import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  test_name !: string;
  test_time !: number;
  number_of_questions !: number;
  questions!: Question[];
  number_input!: number; // số lượng câu hỏi nhập vào

  constructor() { }

  ngOnInit(): void {
    
  }

  setNumberOfQuestions(number_input: number) { 
    if (number_input > 25) {
      number_input = 25;
    } else if (number_input < 0) {
      number_input = 0;
    }
    this.number_of_questions = number_input;
    this.questions = new Array(number_input); // tạo 1 mảng gổm number_input phần tử để render ra number_input câu hỏi
  }

}
