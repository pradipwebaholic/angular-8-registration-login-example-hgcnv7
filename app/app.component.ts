import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}