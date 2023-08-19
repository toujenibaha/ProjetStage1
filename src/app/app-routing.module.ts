import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStageComponent } from './form-stage/form-stage.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AjoutStagiaireComponent } from './ajout-stagiaire/ajout-stagiaire.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { AjoutEncadrantComponent } from './ajout-encadrant/ajout-encadrant.component';
import { AjoutStageComponent } from './ajout-stage/ajout-stage.component';
import { ModifierEncadrantComponent } from './modifier-encadrant/modifier-encadrant.component';
import { ModifierStageComponent } from './modifier-stage/modifier-stage.component';
import { ModifierStagiaireComponent } from './modifier-stagiaire/modifier-stagiaire.component';
import { RecuperationMpComponent } from './recuperation-mp/recuperation-mp.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path:'form',component:FormStageComponent},
  { path:'',component:GeneralPageComponent},
  //{ path:'',component:PageAdminComponent},
  //{ path:'',component:RecuperationMpComponent},
  { path:'retrieve',component:RecuperationMpComponent},
  { path:'errorPage',component:ErrorPageComponent},
  { path:'login',component:LoginFormComponent},
  { path:'CreateAccount',component:CreateAccountComponent},
  { path:'ajoutStagiaire',component:AjoutStagiaireComponent},
  { path:'ajoutEncadrant',component:AjoutEncadrantComponent},
  { path:'ajoutStage',component:AjoutStageComponent},
  { path:'modifierEncadrant',component:ModifierEncadrantComponent},
  { path:'modifierStage',component:ModifierStageComponent},
  { path:'modifierStagiaire',component:ModifierStagiaireComponent},
  { path:'AdminPage',component:PageAdminComponent},
  { path:'error',component:ErrorPageComponent},
  { path:'general',component:GeneralPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
