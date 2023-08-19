import { Component } from '@angular/core';
import { AppService } from '../AppService/app.service';
import { encadrant } from '../AppService/encadrant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-encadrant',
  templateUrl: './ajout-encadrant.component.html',
  styleUrls: ['./ajout-encadrant.component.css']
})
export class AjoutEncadrantComponent {
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  stage:any={idEnc:0,dateD:null,dateF:null,desc:"",titre:"",duree:"",type:""};
  constructor(private appServ:AppService,private router:Router){}
  ajoutEncadrant():void{
    this.appServ.ajoutEncadrant(this.encadrant).subscribe( 
      (res:any) => {
        if(res.msg=="encadrant added"){
          console.log("Encadrant is now added")
          alert("Encadrant ajouté avec succés")
          this.router.navigate(['/AdminPage']);
        }else{
          alert("res.msg")
        }
      }
    );
  }

}
