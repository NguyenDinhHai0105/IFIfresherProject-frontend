import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fresher project';
  private roles: string[] | any;
  public authority: string = '';
 
  constructor(private tokenStorage: TokenStorageService) { }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every((role: string) => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}