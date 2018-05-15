import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpRequest, HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Contato } from '../models/Contato';

@Injectable()
export class ContatoService {

  status: Number;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  enviarEmail(contato: Contato): Promise<any> {
    return this.http.post('https://coralnh-server.herokuapp.com/email', JSON.stringify(contato), this.httpOptions).toPromise();
  }
}
