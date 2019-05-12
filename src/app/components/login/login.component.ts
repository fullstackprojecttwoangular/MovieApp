import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { UserLog } from '../../models/user-log.model';
import {Router} from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Connection } from '@angular/http';
import { connect } from 'net';
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
   
  userData = {username: '', password:''};
  public userInput = this.userData;
  ngOnInit() {
  }
  
  public login(){
    this.userService.verifyUser(this.userData)
    .subscribe() 
    if(false){
      this.router.navigate(['login']);
    }
     else if(true) {
      
      this.router.navigate(['favorite']);
    }
  }



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

//   login(username: string, password: string): void{
//     //let userData = {username: username, password: password};
//      this.userService.verifyUser(this.users)
//      .subscribe(response =>{
//      if(username == username && password == password){
//        localStorage.setItem("username", JSON.stringify(response[0].username));
//        localStorage.setItem("password", JSON.stringify(response[0].password));
//        localStorage.setItem("favoriteMovies", JSON.stringify(response[0].favoriteMovies));
//      this.router.navigate(['favorite']);
//      }
//    });
//  }

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
