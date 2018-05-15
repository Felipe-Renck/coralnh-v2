import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/LoginUser';

@Injectable()
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  OnSubmit(){
    
  }

  public verifyToken(token): Promise<any> {
    // return this.http.get('http://localhost:3002/verifyToken', { params: { token : token }}).toPromise();
    return this.http.get('https://coralnh-server.herokuapp.com/verifyToken', { params: { token : token }}).toPromise();
  }
}
