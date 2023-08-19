import { Component } from '@angular/core';
import { AppService } from '../AppService/app.service';
import { encadrant } from '../AppService/encadrant';
import { Router } from '@angular/router';
import { stage } from '../AppService/stage';

@Component({
  selector: 'app-ajout-stagiaire',
  templateUrl: './ajout-stagiaire.component.html',
  styleUrls: ['./ajout-stagiaire.component.css']
})
export class AjoutStagiaireComponent {
  stagiaire:any={idStagiaire:0,nomStagiaire:"",prenomStagiaire:"",piece_identite:"",num_piece_identite:"",institut:"",indemnite:0,Encadrant_idEncadrant:0,Compte_idCompte:0,Stage_idStage:0,nationalite:"",gouvernorat:"",diplome:"",specialite:"",genre:"",mobile:0,Email:""}
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  encadrants:encadrant[]=[]
  stage:stage={idStage:0,Encadrant_idEncadrant:0,titre:"",date_debut:"",date_fin:"",duree:"",typeStage:"",description:""}
  stages:stage[]=[]
  id:any
  constructor(private appServ:AppService,private router:Router){
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
  }
  getCompteBymail():void{
    this.stagiaire.Encadrant_idEncadrant=sessionStorage.getItem('chosen user');
    this.stagiaire.Stage_idStage=sessionStorage.getItem('chosen stage');
    console.log(this.stagiaire)
    this.appServ.getCompteBymail(this.stagiaire).subscribe( //cette fonction est ajouter stagiaire...je dois la renommer
      (res:any) => {
        alert(res.msg);
        if(res.msg=="stagiaire ajouté avec succès"){
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
