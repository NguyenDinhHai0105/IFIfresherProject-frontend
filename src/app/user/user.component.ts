import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string | undefined;// thêm undefine
  errorMessage: string | undefined;// thêm undefine
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
