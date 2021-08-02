import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  page: number;
  size = 5;
  totalQuestions: number;
  searchResult : Question[];

  constructor(
    private route: ActivatedRoute,
    private questionService : QuestionService
  ) { };

  ngOnInit(): void {
    this.getQuestionBySearch(this.page)
  };

  getQuestionBySearch($event) {
    this.page = $event;
    const routeParam = this.route.snapshot.paramMap;
    const inputFromParam = String(routeParam.get('input'));
    this.questionService.searchQuestion(inputFromParam).subscribe(data => {
    this.searchResult = data;
    this.totalQuestions = data.length;
    })
  }

}
