import { Component } from '@angular/core';
import { encadrant } from '../AppService/encadrant';
import { AppService } from '../AppService/app.service';
import { Router } from '@angular/router';
import { stagiaire } from '../AppService/stagiaire';
import { stage } from '../AppService/stage';
import { SessionService } from '../SessionService/session-service.service';

@Component({
  selector: 'app-modifier-stagiaire',
  templateUrl: './modifier-stagiaire.component.html',
  styleUrls: ['./modifier-stagiaire.component.css']
})
export class ModifierStagiaireComponent {
  stagiaire:any={idStagiaire:0,nomStagiaire:"",prenomStagiaire:"",piece_identite:"",num_piece_identite:"",institut:"",indemnite:0,Encadrant_idEncadrant:0,Compte_idCompte:0,Stage_idStage:0,nationalite:"",gouvernorat:"",diplome:"",specialite:"",genre:"",mobile:0}
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  encadrants:encadrant[]=[]
  stage:stage={idStage:0,Encadrant_idEncadrant:0,titre:"",date_debut:"",date_fin:"",duree:"",typeStage:"",description:""}
  stages:stage[]=[]
  id:any
  ids=sessionStorage.getItem('chosen stage');
  ide=sessionStorage.getItem('chosen user');
  idstg=sessionStorage.getItem('chosen stagiaire');
  idc=sessionStorage.getItem('chosen acc');
  piece:any
  nomE:any;
  nomS:any;
  gov:any
  gender:any;
  nat:any;
  role:any;
  user:any
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
    appServ.afficherStages().subscribe(
      (res:any) => {
        this.stages=res
      }
    );
    appServ.selectEncadrant(this.ide).subscribe(
      (res:any) => {
        this.nomE=res.nomEncadrant+" "+res.prenomEncadrant;
      }
    );
    appServ.selectStage(this.ids).subscribe(
      (res:any) => {
        this.nomS=res.titre;
      }  
    );
    appServ.selectStagiaire(this.idstg).subscribe(
      (res:any) => {
        this.stagiaire=res;
      }
    );
  }
  updateStagiaire():void{
    this.stagiaire.Encadrant_idEncadrant=sessionStorage.getItem('chosen user');
    this.stagiaire.Stage_idStage=sessionStorage.getItem('chosen stage');
    this.stagiaire.Compte_idCompte=sessionStorage.getItem('chosen acc');
    
    console.log(this.stagiaire)
    this.appServ.modifierStagiaire(this.stagiaire).subscribe( 
      (res:any) => {
        alert(res.msg);
        if(res.msg=="stagiaire updated successfully"){
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
  encChoisit2():void{
    const selectElement = document.getElementById("sujet") as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedId = selectedOption.value;
    console.log("selected id is:"+selectedId)
    sessionStorage.setItem('chosen stage',selectedId );
  }
}
