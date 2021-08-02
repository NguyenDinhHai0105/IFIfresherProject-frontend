import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {

  page: number = 0;
  size!: number;
  questions : Question[];
  totalQuestions: number;

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.getQuestions(this.page);
  }

  getQuestions($event) {
    this.page = $event;
    this.questionService.getQuestionsByPage($event - 1, this.size = 5).subscribe( data => {      
      this.questions = data.content;
      this.totalQuestions = data.totalElements;
    })
  }

}
