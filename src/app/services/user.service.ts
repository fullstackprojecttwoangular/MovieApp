import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Users } from '../models/users.model';

import { USERS_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  regURL: string = "http://localhost:8088/Project2MovieAPI/register";
  constructor(private http: HttpClient) {

   }
   public registerUser(user: Users): Observable<boolean>{
    return this.http.post<boolean>(this.regURL, user);
   }
   


}