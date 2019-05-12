import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) {

   }

   login(username: string, password: string): Observable<Users>{
     return this.http.post<Users>("http://localhost:8088/Project2MovieAPI/login", {username: username, password: password});
   }
}
