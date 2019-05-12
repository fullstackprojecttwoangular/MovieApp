import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Users } from '../models/users';
import {catchError } from 'rxjs/operators';

import { UserLog } from '../models/user-log.model';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';
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

  // public verifyUser(users: Users){
  //   return this.http
  //           .post("http://localhost:8088/Project2MovieAPI/login", users);
  // }

  public verifyUser(userData: UserLog): Observable<boolean>{
    return this.http
            .post<boolean>("http://localhost:8088/Project2MovieAPI/login", userData);
  }

  // public verifyUser(userData: UserLog){
  //   return this.http
  //           .post("http://localhost:8088/Project2MovieAPI/login", userData);
  // }

  // verifyUser(username: string, password: string): Observable<Users>{
  //   return this.http.post<Users>("http://localhost:8088/Project2MovieAPI/login", {username: username, password: password});
  // }

//  public login(users: Users): Observable<Users>{
//    return this.http
//               .post("http://localhost:8088/Project2MovieAPI/findUser", users)
//               .pipe(catchError);
              
//  }

// verifyUser (users: UserLog): Observable<Users> { 
//   return this.http.post<Users>("http://localhost:8088/Project2MovieAPI/login", Users );
// }

  // public login(username:string, password:string){

  //   let headers = new HttpHeaders().set("Content Type", "x-www-application-form-urlencoded");
  //   let body = new HttpParams().set("username", username).set("password", password);

  //   return this.http.post("http://localhost:8088/Project2MovieAPI/login", body, {headers:headers});
  // }
  //Best as of 10:06 5/11/2019
  // public login(username:string, password:string){

  //   let body = new HttpParams().set("username", username).set("password", password);

  //   return this.http.post("http://localhost:8088/Project2MovieAPI/login", body);
  // }
  // public login(users: Users){  
  //   return this.http.post("http://localhost:8088/Project2MovieAPI/login", users);
  // }

  // tryLogin (UserLog: UserLog): Observable<Users> { 
  //   return this.http.post<Users>(this.try, UserLog );
  // }

  // public verifyUser(users: Users){
  //   public login(users: Users): Observable<Users>{
  //   return this.http
  //           .post("http://localhost:8088/Project2MovieAPI/findUser", users);
  // }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}