import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChamadaService {

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Credentials": "true"
    })
  };

  constructor(private http: HttpClient) {
  }

  public listUsers(): Promise<any> {
    return this.http.get('http://localhost:3002/list-users', { params: { usuario : "admin", senha : "CoralNH@2018" }}).toPromise();
    // return this.http.get('https://coralnh-server.herokuapp.com/verifyToken', { params: { token : token }}).toPromise();
  }
}
