import { Component } from '@angular/core';
import { SessionService } from '../SessionService/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  role:any
  user:any
  message:any
  constructor(private session:SessionService,private router:Router){
    this.role=sessionStorage.getItem('role');
    this.user=this.session.getSessionUser();
    if(sessionStorage.getItem('user')==null){
      this.message="Connect with us first"
    }else if(this.role=="notAdmin"){
      this.message="Page not found"
    }
  }
}
