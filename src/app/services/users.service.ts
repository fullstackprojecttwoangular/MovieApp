import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }
  
  public registerUser(users: Users){
    return this.http
            .post("http://localhost:8088/Project2MovieAPI/register", users);
  }

}
