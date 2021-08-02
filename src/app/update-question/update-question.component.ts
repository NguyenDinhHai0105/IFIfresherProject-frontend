import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  @Input() quesFromListQues: Question;
  // @Output() quesContent = new EventEmitter<Question>();
  question : string;
  answer_a : string;
  answer_b : string;
  answer_c : string;
  answer_d : string;
  correct_answer : string;
  img : string;

  questionUpdate: Question;


  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
  }

  updateQuestion() {
    this.questionUpdate = new Question(
      this.question,
      this.answer_a,
      this.answer_b,
      this.answer_c,
      this.answer_d,
      this.correct_answer,
      this.img
    );

    this.questionService.updateQuestion(this.questionUpdate, this.quesFromListQues.id).subscribe(data => { });
    window.alert("Cập nhật thành công!");
    window.location.reload();
  }

  // sendQuest() {  
  //   this.question = new Question(
  //   this.questionForm.question,
  //   this.questionForm.answer_a,
  //   this.questionForm.answer_b,
  //   this.questionForm.answer_c,
  //   this.questionForm.answer_d,
  //   this.questionForm.correct_answer,
  //   this.questionForm.img
  // )
  //   console.log(this.question)
  //   this.quesContent.emit(this.question);
  // }

}
