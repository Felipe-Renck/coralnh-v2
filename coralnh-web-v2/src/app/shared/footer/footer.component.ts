import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    dateNow : Date = new Date();

    constructor() { }

    ngOnInit() {}
}
