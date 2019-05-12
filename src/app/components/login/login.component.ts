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
  
  // public login(){
  //   let userData = {username: '', password:''};
  //   this.userService.verifyUser(userData)
  //   .subscribe(Response =>{
  //   console.log("Atempting")
  //   console.log(this.userInput);
  //   //let database = JSON.parse(Response.Users);
  //   console.log(Response);
  //   console.log(this.userInput);
  //   if(Response == this.userInput){
  //     console.log("inside correct login");
  //     this.router.navigate(['favorite']);
  //   }
  //    else {
  //     this.sorry = true;
  //   }
  // }); 
  // }
//LATEST
  // public login(){
  //   let userData = {username: '', password:''};
  //   this.userService.verifyUser(userData)
  //   .subscribe(
  //     data => this.users = data,
  //     error => this.sorry = true,
  //     () =>  this.router.navigate(['favorite']),
  //   );  
  // }
  
  // public login(){
  //   let userData = {username: '', password:''};
  //   this.userService.verifyUser(userData)
  //   .subscribe(
  //     data => this.users = data,
  //     error => this.sorry = true,
  //     () =>  this.router.navigate(['favorite'])
  //   ); 
  // }
  // public login(){
  //   let userData = {username: '', password:''};
  //   this.userService.verifyUser(userData)
  //   .subscribe(Response =>{
  //   console.log("Atempting")
  //   let username: string = JSON.parse(userData.username);
  //   let password: string = JSON.parse(userData.password);
  //   console.log(this.userInput);
  //   if(userData.username == username && userData.password == password){
  //     console.log("inside correct login");
  //     this.router.navigate(['favorite']);
  //   }
  //    else {
  //     this.sorry = true;
  //   }
  // }); 
  // }
  // public login(){
  //   this.userService.verifyUser(this.userData)
  //   .subscribe(Response =>{
  //   console.log("Atempting")
  //   console.log(this.userInput);
  //   if(Response[0] != null){
  //     console.log("inside correct login");
  //     this.router.navigate(['favorite']);
  //   }
  //    else {
  //     console.log("didnt work")
  //     console.log(this.userData);
  //     this.router.navigate(['login']);
  //   }
  // }); 
  // }


  // public login(): void{
  //   this.userService.verifyUser(this.users})
  //     .subscribe(
  //       data => this.userData = data
  //     );
  // }
  // public login(): void{
  //   if(this.userService.verifyUser(this.users)
  //   .subscribe()){
  //   this.router.navigate(['main']);
  //   }
  //   else{
  //     this.router.navigate(['login']);
  //   }
  // }

  // public login(): void{
  //   this.userService.login(this.users)
  //   .subscribe();
  //   this.router.navigate(['main']);
  // }
  
  // login(username: string, password: string): void{
  //   //let userLog = {username: username, password: password};
  //     this.userService.verifyUser(userLog)
  //     .subscribe();
  //     if(username == username && password == password){
  //     this.router.navigate(['main']);
  //     }
  //     else{
  //       this.router.navigate(['login']);
  //     }
  // }

  login(username: string, password: string): void{
    let userData = {username: username, password: password};
     this.userService.verifyUser(userData)
     .subscribe(response =>{
     if(response[0]){
       localStorage.setItem("userId", JSON.stringify(response[0].userId))
       localStorage.setItem("username", JSON.stringify(response[0].username));
       localStorage.setItem("password", JSON.stringify(response[0].password));
       localStorage.setItem("favoriteMovies", JSON.stringify(response[0].favoriteMovies));
     this.router.navigate(['favorite']);
     }
     else{
       console.log(response);
       this.sorry= true;
       this.router.navigate(['favorite']);
     }
   });
 }

  // login(username: string, password: string): void {
  //   let UserLog = { username: username, password: password };

  //   this.userService.verifyUser(UserLog).subscribe(response => {

  //  login(){
  //    this.verifyUser()
  //     .subscribe(r =>{
  //         if(r.token){
  //           this.userService.setToken(r.token);
  //           this.router.navigate(['main']);
  //         }
  //     }, r =>{
  //       alert(r.console.error());
  //     }
  //     );
  //  }
}
