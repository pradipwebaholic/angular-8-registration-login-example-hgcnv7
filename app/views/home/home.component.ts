import { Component, OnInit } from '@angular/core';
import { Observable ,Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../../_services';
import { User } from '../../../_models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData:User=[];

  currentUserSubscription:Subscription;
  constructor(private auth:AuthenticationService) { 
       this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
            this.userData = user;
            
        });
       
  }

  ngOnInit() {
   //this.userData= JSON.parse(localStorage.getItem('currentUser'));
  }
  changeHeight():void {
   
  }
   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

}