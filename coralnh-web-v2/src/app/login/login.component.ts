import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from '../components/notification/notification.component';
import { LoginUser } from '../models/LoginUser';
import { LoginService } from '../services/login.service';

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    dateNow : Date = new Date();

    loginUser: LoginUser = new LoginUser();

    constructor(private loginService:LoginService, private router:Router, private modalService: NgbModal) { }

    ngOnInit() { }

    public login() {
        this.loginService.login(this.loginUser).then(res => this.validateAuthentication(res)).catch(res => this.validateAuthentication(res));
    }

    validateAuthentication = function (res) {

        console.log(res);
        console.log("Sucesso: " + res.success);

        if (res.success == false || res.success == undefined) {
            this.processingLogin = false;
            this.statusMessage = res.error.message;

            $.notify(
                {
                  icon: "ti-gift",
                  message: this.statusMessage == undefined ? "Ocorreu um erro ao fazer o login" : this.statusMessage
                },
                {
                  type: 'danger',
                  timer: 4000,
                  placement: {
                    from: 'bottom',
                    align: 'center'
                  }
                });

        } else {
            // window.location.href = 'https://app.coral.jovensnh.com.br/?username='+ res.username +'&token=' + res.token;
            window.location.href = 'http://localhost:4200/?username='+ res.username +'&token=' + res.token;
        }
    }
}
