import { Component } from '@angular/core';
import { AppService } from '../AppService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private appServ:AppService,private router:Router){}
  compte:any={fullName:" ",Email:"",password:"",role:"notAdmin"}
  nom:any;
  prenom:any
  ajouterCompte():void{
    this.compte.fullName=this.nom+" "+this.prenom
    console.log(this.compte)
    this.appServ.ajouterCompte(this.compte).subscribe( 
      (res:any) => {
        if(res.msg=="compte added"){
          console.log("compte is now added")
          alert("compte is now added")
          this.router.navigate(['/general']);
        }
      }
    );
  }
}
