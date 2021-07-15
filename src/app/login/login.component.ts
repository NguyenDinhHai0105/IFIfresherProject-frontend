import { Component, OnInit } from '@angular/core';
 
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {}; // nhận username, password từ form để cho vào loginInfo
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] | null | undefined; // l
  private loginInfo: AuthLoginInfo | undefined; // thêm undefine // lưu username, password
 
  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService)
    {}
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) { // nếu có token
      this.isLoggedIn = true; // đã đăng nhập đc
      this.roles = this.tokenStorage.getAuthorities(); // trả về quyền truy cập của user
    }
  }
 
  onSubmit() {
    console.log(this.form);
 
    this.loginInfo = new AuthLoginInfo( // tạo thông tin username, password để login
      this.form.username,
      this.form.password
      );
 
    this.authService.attemptAuth(this.loginInfo).subscribe(
      (data : any) => {
        this.tokenStorage.saveToken(data.accessToken); //lấy thông tin từ api để lưu vào sessionstorage
        this.tokenStorage.saveUsername(data.username); //lấy thông tin từ api để lưu vào sessionstorage
        this.tokenStorage.saveAuthorities(data.authorities); //lấy thông tin từ api để lưu vào sessionstorage
 
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
 
  reloadPage() {
    window.location.reload();
  }
}