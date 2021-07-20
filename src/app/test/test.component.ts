import { Component, OnInit } from '@angular/core';
 
import { TokenStorageService } from '../auth/token-storage.service';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests!: Test[] ;
  constructor(
    private testService: TestService,
    private token: TokenStorageService
  ){}
 
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  
  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest() {
    this.testService.getAllTest().subscribe(data => {
      this.tests = data;
    })
  }
}
