import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081/login";
  constructor(private httpClient:HttpClient) { }

  loginUser(users:Users):Observable<object>{
    console.log(users);
 return this.httpClient.post(`${this.url}`,users);
  }

  login():Promise<any>{
    return new Promise((resolve) => {
      localStorage.setItem('loggedIn','true');
      resolve(true);
    })
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('loggedIn');
  }
}
