import { Component } from '@angular/core';
import { encadrant } from '../AppService/encadrant';
import { AppService } from '../AppService/app.service';
import { Router } from '@angular/router';
import { SessionService } from '../SessionService/session-service.service';

@Component({
  selector: 'app-modifier-stage',
  templateUrl: './modifier-stage.component.html',
  styleUrls: ['./modifier-stage.component.css']
})
export class ModifierStageComponent {
  stage:any={Encadrant_idEncadrant:0,date_debut:null,date_fin:null,description:"",titre:"",duree:"",typeStage:""};
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  encadrants:encadrant[]=[]
  ids=sessionStorage.getItem('chosen stage');
  ide=sessionStorage.getItem('chosen user');
  nom:any;
  role:any;
  user:any;
  constructor(private appServ:AppService,private router:Router,private session:SessionService){
    this.role=sessionStorage.getItem('role');
    this.user=this.session.getSessionUser();
    if(sessionStorage.getItem('user')==null || this.role=="notAdmin"){
      this.router.navigate(['/error']);
    }
    appServ.affichierEncadrants().subscribe(
      (res:any) => {
        this.encadrants=res
      }
    );
    appServ.selectEncadrant(this.ide).subscribe(
      (res:any) => {
        this.nom=res.nomEncadrant+" "+res.prenomEncadrant
      }
    );
    appServ.selectStage(this.ids).subscribe(
      (res:any) => {
        console.log(this.ids)
        this.stage=res
      }
    );
      
  }
  updateStage():void{
    this.stage.Encadrant_idEncadrant=sessionStorage.getItem('chosen user');
    console.log(this.stage)
    this.appServ.modifierStage(this.stage).subscribe( 
      (res:any) => {
        alert(res.msg);
        if(res.msg=="stage successfully updated"){
          this.router.navigate(['/AdminPage']);
        }
      }
    );
  }
  encChoisit():void{
    const selectElement = document.getElementById("encadr") as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedId = selectedOption.value;
    console.log("selected id is:"+selectedId)
    sessionStorage.setItem('chosen user',selectedId );
    const id=sessionStorage.getItem('chosen enc');
    console.log("2nd id is:"+id)
  }
}
