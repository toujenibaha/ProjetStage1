import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { SessionService } from '../SessionService/session-service.service';

declare var bootstrap: any;

@Component({
  selector: 'app-form-stage',
  templateUrl: './form-stage.component.html',
  styleUrls: ['./form-stage.component.css']
})
export class FormStageComponent {
  role:any;
  user:any
  pwd:any
  constructor(private http: HttpClient,private router:Router,private session:SessionService){
    this.role=sessionStorage.getItem('role');
    this.user=this.session.getSessionUser();
    if(sessionStorage.getItem('user')==null){
      this.router.navigate(['/error']);
    }
  
  }
  ngOnInit(){
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
   }
  name:any
  mail:any
  messaage:any
  private serviceID = '';
  private templateID = '';
  private userID = '';
  sendEmail(e:any,login:any) {
    const result = confirm("vous etes sur que tous les donnés ci dessous sont valides?");
    if (result) {
       e.preventDefault();
    emailjs.sendForm(this.serviceID,this.templateID, e.target,this.userID)
    .then((result) => {
        console.log(result.text);
        this.messaage="un mail a été envoyé avec succés au steg pour les informer de votre demande"
    }, (error) => {
        console.log(error.text);
        this.messaage="échec,veuillez remplir le formulaire de nouvea s'il vous plait"
    });
    } else {
      console.log('sending canceled.');
    }
}
  

}
