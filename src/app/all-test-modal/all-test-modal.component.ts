import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { TestService } from '../services/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-all-test-modal',
  templateUrl: './all-test-modal.component.html',
  styleUrls: ['./all-test-modal.component.css']
})
export class AllTestModalComponent implements OnInit {

  @Input() quesIdFromList: number;
  testId!: number;
  tests: Test[];

  constructor(
    private testService : TestService,
    private questionService : QuestionService
  ) { }

  ngOnInit(): void {
    this.testService.getAllTest().subscribe(data => {
      this.tests = data;
    });
  }

  addQuesToTest() {
    this.questionService.addQuesToTest(this.quesIdFromList, this.testId).subscribe(data => {});
    window.alert("thêm thành công!");
    window.location.reload();
  }

}
