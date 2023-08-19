import { Component,OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { AppService } from '../AppService/app.service';


@Component({
  selector: 'app-recuperation-mp',
  templateUrl: './recuperation-mp.component.html',
  styleUrls: ['./recuperation-mp.component.css']
})
export class RecuperationMpComponent {
codeS:any;
codeHidden:any
codeWrite:any
mail:any
pwd:any
message:any
disp:string="hide";
 constructor(private appServ:AppService){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  this.codeS=result
  sessionStorage.setItem('code',this.codeS);
  console.log("the secret code is:"+this.codeS)
 }
 ngOnInit(): void {
  document.getElementById('labPass')?.setAttribute("style","display:none")
  document.getElementById('pass')?.setAttribute("style","display:none")
  document.getElementById('enrg')?.setAttribute("style","display:none")
}
 sendCode(e:any){
  console.log(this.codeS)
  e.preventDefault();
  emailjs.sendForm('service_ti5rs0x','template_qsfbkqz', e.target, 'LglSbH6DlUdNgdXlv')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
 }
 compare(){
  const code=sessionStorage.getItem('code');
  console.log("code:"+code)
  console.log("codeHidden:"+this.codeHidden)
  if(this.codeHidden==code){
    this.message="Code Correcte"
    document.getElementById('labPass')?.setAttribute("style","display:inline-block")
    document.getElementById('pass')?.setAttribute("style","display:inline-block")
    document.getElementById('enrg')?.setAttribute("style","display:inline-block")
  }else{
    this.message="Code Incorrecte"
    document.getElementById('labPass')?.setAttribute("style","display:none")
    document.getElementById('pass')?.setAttribute("style","display:none")
    document.getElementById('enrg')?.setAttribute("style","display:none")
  }
 }
 updatePwd(){
  console.log("email:"+this.mail)
  console.log("password:"+this.pwd)
  this.appServ.modifierCompte(this.mail,this.pwd).subscribe(
    (res:any)=>{
      console.log(res.msg)
   }
  )
 }
 sendEmail(e:any) {
  console.log(this.codeS)
  emailjs.sendForm('service_ti5rs0x','template_qsfbkqz', e.target, 'LglSbH6DlUdNgdXlv')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
}
