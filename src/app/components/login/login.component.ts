import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { UserLog } from '../../models/user-log.model';
import {Router} from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Connection, Response } from '@angular/http';
import { ConnectionService } from 'src/app/services/connection.service';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/injector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  constructor(private userService: UsersService, private router: Router) {

   }
   sorry: boolean = false;
  userData = {username: '', password:''};
  userInput = {username: '', password:''};
  users: Users = new Users (0, '', '');
  ngOnInit() {
  }
 

  login(username: string, password: string): void{
    let userData = {username: username, password: password};
     this.userService.verifyUser(userData)
     .subscribe(response =>{
     if(response[0]){
       sessionStorage.setItem("userId", JSON.stringify(response[0].userId))
       sessionStorage.setItem("username", JSON.stringify(response[0].username));
       sessionStorage.setItem("password", JSON.stringify(response[0].password));
       sessionStorage.setItem("favoriteMovies", JSON.stringify(response[0].favoriteMovies));
     this.router.navigate(['favorite']);
     }
     else{
       console.log(response);
       this.sorry= true;
       this.router.navigate(['favorite']);
     }
   });
 }

 
}
