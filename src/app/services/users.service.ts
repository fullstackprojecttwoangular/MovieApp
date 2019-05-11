import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Users } from '../models/users';

import { UserLog } from '../models/user-log.model';
const TOKEN = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }

  setToken(token: string): void{
    localStorage.setItem(TOKEN, token);
  }

  isLogged(){
    return localStorage.getItem(TOKEN) !=null;
  }

  

  public registerUser(users: Users){
    return this.http
            .post("http://localhost:8088/Project2MovieAPI/register", users);
  }

 
  // public login(username:string, password:string){

  //   let headers = new HttpHeaders().set("Content Type", "x-www-application-form-urlencoded");
  //   let body = new HttpParams().set("username", username).set("password", password);

  //   return this.http.post("http://localhost:8088/Project2MovieAPI/login", body, {headers:headers});
  // }

  public login(users: Users){  
    return this.http.post("http://localhost:8088/Project2MovieAPI/login", users);
  }

  // tryLogin (UserLog: UserLog): Observable<Users> { 
  //   return this.http.post<Users>(this.try, UserLog );
  // }

  // public login(users: Users): Observable<Users>{
  //   return this.http
  //           .post("http://localhost:8088/Project2MovieAPI/findUser", users)
  //           ;
  // }

}
