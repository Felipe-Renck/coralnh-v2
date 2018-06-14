import { Component, OnInit } from '@angular/core';
import { ChamadaService } from '../services/chamada.service';
import { User } from '../models/User';


@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css']
})
export class ChamadaComponent implements OnInit {

  users: User[];

  constructor(private chamadaService: ChamadaService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(){
    this.chamadaService.listUsers().then(res => this.populateTable(res));
  }

  populateTable = function(res){
    this.users = res;
  }

}
