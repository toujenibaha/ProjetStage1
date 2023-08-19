import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl="http://localhost/stage/";
  constructor(private http: HttpClient) { }
  selectStagiaire(CIN:any) {
    return this.http.get(`${this.baseUrl}stagiaire.php?function=getStagiaire&CIN=${CIN}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  selectEncadrant(CIN:any) {
    return this.http.get(`${this.baseUrl}encadrant.php?function=getEncadrant&CIN=${CIN}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  selectStage(id:any) {
    return this.http.get(`${this.baseUrl}stage.php?function=getStage&ids=${id}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  afficherTout() {
    return this.http.get(`${this.baseUrl}stagiaire.php?function=showtoutsStagiaire`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  sortStagiaires() {
    return this.http.get(`${this.baseUrl}stagiaire.php?function=sortStagiaires`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  affichierEncadrants(){
    return this.http.get(`${this.baseUrl}encadrant.php?function=showtoutsEncadrant`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  afficherStages(){
    return this.http.get(`${this.baseUrl}stage.php?function=showtoutsStages`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  sorttStagiairesBy(criteria:any) {
    return this.http.get(`${this.baseUrl}stagiaire.php?function=sortStagiairesBy&Criteria=${criteria}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  sorttStagesBy(criteria:any) {
    return this.http.get(`${this.baseUrl}stage.php?function=sortStagesBy&Criteria=${criteria}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  findtStagiaireBy(criteria:any,searchValue:any) {
    return this.http.get(`${this.baseUrl}stagiaire.php?function=findStagiaireBy&Criteria=${criteria}&searchValue=${searchValue}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
  getCompteBymail(stagiaire:any){
    console.log(stagiaire)
    return this.http.post(`${this.baseUrl}compte.php?function=findcompteBymail`,stagiaire).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  ajoutEncadrant(encadrant:any){
    console.log(encadrant)
    return this.http.post(`${this.baseUrl}encadrant.php?function=addEncadrant`,encadrant).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  ajouterCompte(encadrant:any){
    console.log(encadrant)
    return this.http.post(`${this.baseUrl}compte.php?function=addCompte`,encadrant).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  deleteStagiaire(id:any){
    console.log(id)
    return this.http.post(`${this.baseUrl}stagiaire.php?function=deleteStagiaire`,{id:id}).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  deleteStagiaires(id:any){
    console.log(id)
    return this.http.post(`${this.baseUrl}stagiaire.php?function=deleteStagiairesOf`,{id:id}).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  deleteEncadrant(id:any){
    console.log(id)
    return this.http.post(`${this.baseUrl}encadrant.php?function=deleteEncadrant`,{ide:id}).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  deleteStage(id:any){
    console.log(id)
    return this.http.post(`${this.baseUrl}stage.php?function=deleteStage`,{ids:id}).pipe(
      map((res: any) => {
        try {
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  ajoutStage(stage:any){
    console.log(stage)
    return this.http.post(`${this.baseUrl}stage.php?function=ajoutStage`,stage).pipe(
      map((res: any) => {
        try {
          console.log(res)
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  modifierEncadrant(encadrant:any){
    return this.http.post(`${this.baseUrl}encadrant.php?function=updateEncadrant`,encadrant).pipe(
      map((res: any) => {
        try {
          console.log(res)
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  modifierCompte(email:any,pwd:any){
    return this.http.post(`${this.baseUrl}compte.php?function=UpdateCompte`,{pwd:pwd,email:email}).pipe(
      map((res: any) => {
        try {
          console.log(res)
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  modifierStage(stage:any){
    return this.http.post(`${this.baseUrl}stage.php?function=updateStage`,stage).pipe(
      map((res: any) => {
        try {
          console.log(res)
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
  modifierStagiaire(stagiaire:any){
    return this.http.post(`${this.baseUrl}stagiaire.php?function=updateStagiaire`,stagiaire).pipe(
      map((res: any) => {
        try {
          console.log(res)
          return res;
        } catch (error) {
          console.error('Error parsing response:', error);
          throw error;
        }
      })
    );
  }
}
