import { Component, OnInit } from '@angular/core';
 
import { TokenStorageService } from '../auth/token-storage.service';
import { Test } from '../test';
import { TestService } from '../test.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // info: any;
 
  // constructor(private token: TokenStorageService) { }
 
  // ngOnInit() {
  //   this.info = {
  //     token: this.token.getToken(),
  //     username: this.token.getUsername(),
  //     authorities: this.token.getAuthorities()
  //   };
  // }
 
  // logout() {
  //   this.token.signOut();
  //   window.location.reload();
  // }

  tests!: Test[] ;
  constructor(
    private testService: TestService
  ){}

  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest() {
    this.testService.getAllTest().subscribe(data => {
      console.log(data);
      this.tests = data;
    })
  }
}