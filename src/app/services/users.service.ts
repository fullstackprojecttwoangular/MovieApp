import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Users } from '../models/users';
import {catchError } from 'rxjs/operators';
import { UserLog } from '../models/user-log.model';
import { Observable, of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { invalid } from '@angular/compiler/src/render3/view/util';
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
      .post("ec2-18-216-112-251.us-east-2.compute.amazonaws.com/register", users);
  }

  

 

  public verifyUser(userData: UserLog): Observable<Users>{
    return this.http
      .post("ec2-18-216-112-251.us-east-2.compute.amazonaws.com/findUsername", userData)
            .pipe(catchError(invalid => of(invalid)));
  }

  

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
