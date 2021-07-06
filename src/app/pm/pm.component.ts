import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {
  board: string | undefined;// thêm undefine
  errorMessage: string | undefined; // thêm undefine
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getPMBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}