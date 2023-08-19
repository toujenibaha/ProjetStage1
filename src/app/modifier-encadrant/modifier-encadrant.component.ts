import { Component } from '@angular/core';
import { encadrant } from '../AppService/encadrant';
import { AppService } from '../AppService/app.service';
import { Router } from '@angular/router';
import { SessionService } from '../SessionService/session-service.service';

@Component({
  selector: 'app-modifier-encadrant',
  templateUrl: './modifier-encadrant.component.html',
  styleUrls: ['./modifier-encadrant.component.css']
})
export class ModifierEncadrantComponent {
  user:any
  role:any
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  id=sessionStorage.getItem('chosen enc');
  encadrant2:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  constructor(private appServ:AppService,private router:Router,private session:SessionService){
    this.role=sessionStorage.getItem('role');
    this.user=this.session.getSessionUser();
    if(sessionStorage.getItem('user')==null || this.role=="notAdmin"){
      this.router.navigate(['/error']);
    }
    appServ.selectEncadrant(this.id).subscribe(
      (res:any) => {
        this.encadrant2=this.encadrant
        this.encadrant=res
        this.encadrant2=this.encadrant
        console.log(this.encadrant)
      }
    );
  }
  modifierEncadrant():void{
    console.log(this.encadrant)
    this.appServ.modifierEncadrant(this.encadrant).subscribe( 
      (res:any) => {
          alert(res.msg)
          if(res.msg=="encadrant successfully updated"){
            this.router.navigate(['/AdminPage']);
          }
      }
    );
  }
}
