import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 
  @Output() quesContent = new EventEmitter<Question>();

  questionForm: any = {};

  question !: Question;

  constructor() { }

  ngOnInit(): void {
  }


  sendQuest() {  
    this.question = new Question(
    this.questionForm.question,
    this.questionForm.answer_a,
    this.questionForm.answer_b,
    this.questionForm.answer_c,
    this.questionForm.answer_d,
    this.questionForm.correct_answer,
    this.questionForm.img
  )
    console.log(this.question)
    this.quesContent.emit(this.question);
  }

}
