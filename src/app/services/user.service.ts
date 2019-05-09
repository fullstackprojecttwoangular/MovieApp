import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Users } from '../models/users.model';
import { ClientMessage } from '../models/client-message.model';
import { USERS_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }

   public registerUser(user: Users): Observable<ClientMessage>{
     return this.http
              .post(`${USERS_URL}/register`, user)
              .catch(this.handleError);
   }

   public findUser(user: Users): Observable<Users>{
      return this.http
                .post(`${USERS_URL}/findUser`, user)
                .catch(this.handleError);
   }
   private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}