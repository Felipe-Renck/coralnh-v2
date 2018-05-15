import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from '../components/notification/notification.component';
import { Contato } from '../models/Contato';
import { ContatoService } from '../services/contato.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  contato = new Contato(0, '', '', '', '', '');

  constructor(private http: HttpClient, private contatoService: ContatoService, private modalService: NgbModal) { }

  ngOnInit() { }

  onSubmit() {
    this.enviar();
  }

  enviar = function () {
    this.showNotification('bottom', 'center', "A mensagem está sendo enviada...por favor aguarde!");
    return this.contatoService.enviarEmail(this.contato).then(res => this.checkEnvio(res)).catch(res => this.checkEnvio(res));
  }

  checkEnvio = function (res) {
    if (res.status == "200") {
      this.showNotification('bottom', 'center', "Mensagem enviada!");
    }
    else {
      this.showNotification('bottom', 'center', "Ocorreu um problema ao tentar enviar o formulário. OBS: Por favor, tente mais tarde...");
    }
  }

  showNotification(from, align, customMessage) {
    $.notify(
      {
        icon: "ti-gift",
        message: customMessage
      },
      {
        type: 'danger',
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }

}

