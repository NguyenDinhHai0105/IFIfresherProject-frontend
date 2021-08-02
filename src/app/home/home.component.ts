import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { Test } from '../test';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';

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
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToTest() {
    this.router.navigate(['test']);
  }

  goToRandomTest() {
    this.router.navigate(['random-test']);
  }

  goToTrafficSigns() {
    this.router.navigate(['traffic-signs']);
  }

}