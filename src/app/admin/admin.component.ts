import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  board: string | undefined; // thêm undefine
  errorMessage: string | undefined; // thêm undefine
  username!: string | null;
 
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService
    ) { }
    
  

  ngOnInit() {
    this.username = this.tokenStorageService.getUsername();
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}