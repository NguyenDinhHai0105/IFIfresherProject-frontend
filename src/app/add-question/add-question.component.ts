import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


  questionForm: any = {};
  question !: Question;
  questions : Question[] = new Array() ;

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.question);
    this.questionService.addQuestions(this.questions).subscribe(data => {
    });
  }

  pushQuestion(question: Question) {
    this.questions.push(question);
  }

}
