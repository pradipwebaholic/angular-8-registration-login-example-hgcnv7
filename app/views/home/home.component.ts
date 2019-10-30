import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Observable ,Subscription,  } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../../_services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData:any=[];
  isLoding:boolean=true;

  currentUserSubscription:Subscription;
  constructor(private auth:AuthenticationService, private cd: ChangeDetectorRef) { 
    
     this.currentUserSubscription = this.auth.currentUser.subscribe(user2 => {
            this.userData = user2;
           // this.cd.detectChanges();
            
        });
       
  }

  ngOnInit() {
   //this.userData= JSON.parse(localStorage.getItem('currentUser'));
    
     
  }
  changeHeight():void {
   
  }
   count=0;
  projectContentChanged(){
    
    this.count+=1;
    if(this.count>1){
        console.log(this.isLoding);
       if(this.isLoding==true) { (this.isLoding= false); this.cd.detectChanges(); console.log("changed");}
    }
    //this.cd.detectChanges();
  }
   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

}