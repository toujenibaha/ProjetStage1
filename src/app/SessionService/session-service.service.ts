import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService{

  constructor() { }
  private readonly SESSION_KEY = 'my-session';
  private USER:any='user';
  private mot:any='pdw';
  private message:any='message';
  getSession(): any {
    const sessionData = sessionStorage.getItem(this.SESSION_KEY);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  }
  getSessionUser(): any {
    const sessionData = sessionStorage.getItem(this.USER);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  }
  getSessionMot(): any {
    const sessionData = sessionStorage.getItem(this.mot);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  }
  getSessionMSG(): any {
    const sessionData = sessionStorage.getItem(this.message);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  }
  setSession(data: any): void {
    console.log('Saving data to session:', data);

    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(data));
  }
  setSessionMSG(data: any): void {
    console.log('Saving data to session:', data);

    sessionStorage.setItem(this.message, JSON.stringify(data));
  }
  setSessionUser(data: any): void {
    console.log('Saving data to session user:', data);

    sessionStorage.setItem(this.USER, JSON.stringify(data));
  }
  setSessionMot(data: any): void {
    console.log('Saving data to session pwd:', data);

    sessionStorage.setItem(this.mot, JSON.stringify(data));
  }
  clearSession(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
  }
  clearSessionUser(): void {
    sessionStorage.removeItem(this.USER);
  }
  clearSessionMot(): void {
    sessionStorage.removeItem(this.mot);
  }
}
