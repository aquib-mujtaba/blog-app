import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel =
    {
      userId: '',
      password: ''
    };

  constructor(private _authservice: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login() {
    this._authservice.login(this.loginModel).subscribe
      (
      data => {
        if (data.authToken) {
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('authToken', data.authToken);
          this._router.navigateByUrl('/blogs');
        }
      }
      );

  }

}
