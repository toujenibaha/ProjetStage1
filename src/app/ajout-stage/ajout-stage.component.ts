import { Component } from '@angular/core';
import { AppService } from '../AppService/app.service';
import { encadrant } from '../AppService/encadrant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-stage',
  templateUrl: './ajout-stage.component.html',
  styleUrls: ['./ajout-stage.component.css']
})
export class AjoutStageComponent {
  stage:any={idEnc:0,dateD:null,dateF:null,desc:"",titre:"",duree:"",type:""};
  encadrant:encadrant={idEncadrant:0,nomEncadrant:"",prenomEncadrant:"",cin:"",email:"",mobile:0}
  encadrants:encadrant[]=[]
  constructor(private appServ:AppService,private router:Router){
    appServ.affichierEncadrants().subscribe(
      (res:any) => {
        this.encadrants=res
      }
    );
  }
  ajoutStage():void{
    this.stage.idEnc=sessionStorage.getItem('chosen user');
    this.appServ.ajoutStage(this.stage).subscribe( 
      (res:any) => {
        alert(res.msg);
        if(res.msg=="stage successfully added"){
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
    const id=sessionStorage.getItem('chosen user');
    console.log("2nd id is:"+id)
  }
}
