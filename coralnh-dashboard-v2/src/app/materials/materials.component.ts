import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.verifyToken(localStorage.getItem('token')).then(res => this.verifyIfTokenIsValid(res)).catch(res => this.verifyIfTokenIsValid(res));
  }

  verifyIfTokenIsValid = function(res){
    if (res.message == "IsAExpiredToken") {
      // window.location.href = 'http://localhost:4200/login';
      window.location.href = 'https://coral.jovensnh.com.br/login';
    }
  }

}
