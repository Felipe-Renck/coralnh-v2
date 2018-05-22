import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string;
  token: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
}


