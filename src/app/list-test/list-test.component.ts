import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  tests!: Test[];

  constructor(
    private testService : TestService
  ) { }

  getAllTest(){
    this.testService.getAllTest().subscribe( data => {
      this.tests = data;
    })
  }

  deleteTest(id: number) {
    this.testService.deleteTest(id).subscribe( data => {      
    });
    window.location.reload();
  }

  ngOnInit(): void {
    this.getAllTest()
  }

}
