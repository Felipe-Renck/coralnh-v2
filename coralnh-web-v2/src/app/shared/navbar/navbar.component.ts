import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarToggle() {
        if (!this.element.nativeElement.children[0].getElementsByClassName('show')[0]) {         
            const html = document.getElementsByTagName('html')[0];  
            this.toggleButton.classList.add('toggled');    
            html.classList.add('nav-open');        
        } else {
            const html = document.getElementsByTagName('html')[0];
            this.toggleButton.classList.remove('toggled');
            html.classList.remove('nav-open');
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
