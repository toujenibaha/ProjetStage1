import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService{
  baseUrl="http://localhost/stage/";
  constructor(private http: HttpClient) { }
  selectClient(nom:any,pwd:any) {
    return this.http.get(`${this.baseUrl}client.php?function=getClient&username=${nom}&mdp=${pwd}`).pipe(
      map((res: any)=>{
        return res;
      })
    );
  }
}
