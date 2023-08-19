import { Component,NgZone} from '@angular/core';
import { ClientService } from '../ClientService/client-service.service';
import { client } from '../ClientService/client';
import { Router } from '@angular/router';
import { SessionService } from '../SessionService/session-service.service';
import { FacebookService } from '../facebook.service';

declare const FB: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  message:String="";
  client:client={idCompte:0,fullName:"",password:"",Email:"",role:""}
  clients:client[]=[];
  constructor(private _ngZone: NgZone,private facebook:FacebookService,private clientService:ClientService,private sessionService:SessionService,private router: Router){
  }
  
  verify(){
      this.clientService.selectClient(this.client.fullName,this.client.password).subscribe(
        (res: any) => {
          if(res==null){
            this.message= "nom d'utilisateur et/ou mot de passe invalide";
          }else{
            this.sessionService.setSessionUser({user:this.client.fullName});
            this.sessionService.setSessionMot({mot:this.client.password})
            console.log(res.role)
            sessionStorage.setItem('role',res.role);
            if(res.role=="notAdmin"){
              this.router.navigate(['/form']);
            }else{
              this.router.navigate(['/AdminPage']);
            }
            //this.router.navigate(['/form']);
          }
        });
  }
  async login(){
    FB.login((response:any) => {
      if (response.authResponse) {
        console.log("hre is the status:"+response.status)
        console.log("here is your access token:"+JSON.stringify(response.authResponse))
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response:any) {
          console.log('Good to see you, ' + response.name + '.'+"here are you stuff:"+JSON.stringify(response));  
        });
        this.facebook.LoginWithFacebook(response.authResponse.accessToken).subscribe(
          (res: any) => {
            if(res.msg=="user is verified"){
              //console.log("this is the response from server:"+res.msg)//
              console.log("this is the response from facebook:"+JSON.stringify(res.responseToken))
              this.router.navigate(['/form']);
            }else{
              this.message="ERROR WHILE CONNECTING WITH FACEBOOK"
            }
          });
      }else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }
  /*async login(){
    var model=this.connect();
    console.log(model)
    this.facebook.LoginWithFacebook(model).subscribe(
      (res: any) => {
        console.log("message for reservation:"+res.msg)
      });
  }*/
  /*async login() {
    try {
      const loginResponse = await new Promise<any>((resolve, reject) => {
        FB.login((result: any) => {
          console.log("access toekn is:"+result.status)
          resolve(result);
        }, { scope: 'email' });
      });
      console.log(loginResponse.authResponse)
      if (loginResponse.authResponse) {
        const { accessToken } = loginResponse.authResponse;
        console.log(accessToken)
        this.facebook.LoginWithFacebook(accessToken).subscribe(
          (response: any) => {
            this._ngZone.run(() => {
              this.router.navigate(['/form']);
            });
          },
          (error: any) => {
            console.log(error);
          }
        );
      } else {
         console.log("User cancelled login or did not grant permission")
      }
    } catch (error) {
      console.log("Handling login error")
    }
  }*/

  

}
