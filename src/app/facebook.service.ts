import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  private path ="http://localhost/control/"

  constructor(private httpClient:HttpClient) { }
  LoginWithFacebook(credentials: any): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    console.log(credentials)
    return this.httpClient.post(`${this.path}facebook.php?function=loginWithFacebook`,credentials).pipe(
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
