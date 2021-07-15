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

  test !: Test ;
  questions !: Question[];

  constructor(
    private route: ActivatedRoute,
    private testService : TestService
  ) { }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const testIdFromRoute = Number(routeParams.get('id'));
    this.testService.getTestById(testIdFromRoute).subscribe(data=> {
      console.log(data);
      this.test = data;
      this.questions = this.test.questions;
      console.log(this.questions);
    });
  }

}
