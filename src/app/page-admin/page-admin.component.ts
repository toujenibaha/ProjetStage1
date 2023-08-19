import { Component } from '@angular/core';
import { AppService } from '../AppService/app.service';
import { stagiaire } from '../AppService/stagiaire';
import { encadrant } from '../AppService/encadrant';
import { stage } from '../AppService/stage';
import { Router } from '@angular/router';
import { SessionService } from '../SessionService/session-service.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  stagiaire:stagiaire={idStagiaire:0,nomStagiaire:"",prenomStagiaire:"",piece_identite:"",num_piece_identite:"",institut:"",indemnite:0,Encadrant_idEncadrant:0,Compte_idCompte:0,Stage_idStage:0,nationalite:"",gouvernorat:"",diplome:"",specialite:"",genre:"",mobile:0}
  stagiaires:stagiaire[]=[]
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  encadrants:encadrant[]=[]
  stage:stage={idStage:0,Encadrant_idEncadrant:0,titre:"",date_debut:"",date_fin:"",duree:"",typeStage:"",description:""}
  stages:stage[]=[]
  searchCriteria:any="nomStagiaire";
  searchValue:any;
  user:any;
  role:any
  constructor(private appServ:AppService,private router:Router,private session:SessionService){
    this.role=sessionStorage.getItem('role');
    this.user=this.session.getSessionUser();
    if(sessionStorage.getItem('user')==null || this.role=="notAdmin"){
      this.router.navigate(['/error']);
    }
    appServ.afficherTout().subscribe(
      (res:any) => {
        this.stagiaires=res
      }
    );
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
 sortStagiaires(){
  this.appServ.sortStagiaires().subscribe(
    (res:any)=>{
      this.stagiaires=res;
    }
  )
 }
 sortStagiairesBy(criteria:any){
  this.appServ.sorttStagiairesBy(criteria).subscribe(
    (res:any)=>{
      this.stagiaires=res;
      console.log(this.stagiaires)
    }
  )
 }
 sortStagesBy(criteria:any){
  this.appServ.sorttStagesBy(criteria).subscribe(
    (res:any)=>{
      this.stages=res;
      console.log(this.stages)
    }
  )
 }
 findStagiaireBy(criteria:any,searchValue:any){
  this.appServ.findtStagiaireBy(criteria,searchValue).subscribe(
    (res:any)=>{
      this.stagiaires=res;
      console.log(this.stagiaires);
      console.log(this.searchCriteria);
      console.log(this.searchValue);
    }
  )
 }
 confirmDelete(nom:any,prenom:any,id:any): void {
  const result = confirm("Êtes-vous sûr(e) de vouloir supprimer l'étudiant:"+nom+" "+prenom+"?");
  if (result) {
    this.appServ.deleteStagiaire(id).subscribe(
      (res:any)=>{
        console.log("this is the server response to deletion:"+JSON.stringify(res))
        window.location.reload();
      }
    )
    console.log('stagiaire deleted!'+id);
  } else {
    console.log('Delete canceled.');
  }
}
confirmDeleteOfMany(nom:any,id:any): void {
  const result = confirm("Vous allez supprimer tous les stagiaires associés au Stage:"+nom+",Poursuivre?");
  if (result) {
    this.appServ.deleteStagiaires(id).subscribe(
      (res:any)=>{
        console.log("this is the server response to deletion:"+JSON.stringify(res))
        window.location.reload();
      }
    )
    console.log('stagiaires deleted!'+id);
  } else {
    console.log('Delete canceled.');
  }
}
confirmDeleteEncadrant(nom:any,prenom:any,id:any): void {
  const result = confirm("Êtes-vous sûr(e) de vouloir supprimer l'encadrant ?:"+nom+" "+prenom+"\n"+"Cela va entainer la suppression de tous ses stages aussis.");
  if (result) {
    this.appServ.deleteEncadrant(id).subscribe(
      (res:any)=>{
        console.log("this is the server response to deletion:"+JSON.stringify(res))
        alert(res.msg)
        window.location.reload();
      }
    )
    console.log('encadrant deleted!'+id);
  } else {
    console.log('Delete canceled.');
  }
}
confirmDeleteStage(nom:any,type:any,id:any): void {
  const result = confirm("Êtes-vous sûr(e) de vouloir supprimer le stage:"+type+":"+nom);
  if (result) {
    this.appServ.deleteStage(id).subscribe(
      (res:any)=>{
        console.log("this is the server response to deletion:"+JSON.stringify(res))
        window.location.reload();
      }
    )
    console.log('stage deleted!'+id);
  } else {
    console.log('Delete canceled.');
  }
}
selectedEnc(ide:any){
  sessionStorage.setItem('chosen enc',ide);
  const id=sessionStorage.getItem('chosen enc');
  console.log("2nd id is:"+id)
  this.router.navigate(['/modifierEncadrant']);
}
selectedStage(ids:any,ide:any){
  sessionStorage.setItem('chosen stage',ids);
  sessionStorage.setItem('chosen user',ide);
  const id=sessionStorage.getItem('chosen stage');
  const idt=sessionStorage.getItem('chosen user');
  console.log("2nd id is:"+id)
  console.log("3rd id is:"+idt)
  this.router.navigate(['/modifierStage']);
}
selectedStagiaire(ids:any,ide:any,idsta:any,idc:any){
  sessionStorage.setItem('chosen stagiaire',idsta);
  sessionStorage.setItem('chosen stage',ids);
  sessionStorage.setItem('chosen user',ide);
  sessionStorage.setItem('chosen acc',idc)
  const id=sessionStorage.getItem('chosen stage');
  const idt=sessionStorage.getItem('chosen user');
  const idu=sessionStorage.getItem('chosen stagiaire');
  const idk=sessionStorage.getItem('chosen acc');
  console.log("2nd id is:"+id)
  console.log("3rd id is:"+idt)
  console.log("4th id is:"+idu)
  console.log("5th id is:"+idk)
  this.router.navigate(['/modifierStagiaire']);
}
}
