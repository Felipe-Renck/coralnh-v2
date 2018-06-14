import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  username: string;
  token: string;
  IsAuthenticated: boolean = false;

  constructor(private route: ActivatedRoute, private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.username == null || this.username == undefined) {
      this.username = route.queryParams.username;
    }
    if (this.token == null || this.token == undefined) {
      this.token = route.queryParams.token;
    }

    this.getAuthenticationParameters();

    this.loginService.verifyToken(localStorage.getItem('token')).then(res => this.verifyIfTokenIsValid(res)).catch(res => this.verifyIfTokenIsValid(res));

    return this.IsAuthenticated;
  }

  verifyIfTokenIsValid = function (res) {
    this.IsAuthenticated = true;

    // if (res.message == "IsAExpiredToken") {
    //   // window.location.href = 'https://coral.jovensnh.com.br/login';
    //   window.location.href = 'http://localhost:4201/login';
    // }
    // else {
    //   this.IsAuthenticated = true;
    // }
  }

  getAuthenticationParameters() {
    localStorage.setItem('token', this.token);
    localStorage.setItem('username', this.username);
  }


}
