import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { UserLog } from '../../models/user-log.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  constructor(private userService: UsersService, private router: Router) {

   }
   public users: Users = new Users(0,'','');
   public userData: UserLog = new UserLog('','');
  ngOnInit() {
  }
  
  // public login(): void{
  //   this.userService.login(this.users})
  //     .subscribe(
  //       data => this.userData = data
  //     );
  // }

  // public login(): void{
  //   this.userService.login(this.users)
  //   .subscribe();
  //   this.router.navigate(['main']);
  // }
  
  // login(username: string, password: string): void{
  //   // let userLog = {username: username, password: password};
  //     this.userService.login(username, password)
  //     .subscribe();
  //     if(username == username && password == password){
  //     this.router.navigate(['main']);
  //     }
  // }

  login(username: string, password: string): void{
    let userData = {username: username, password: password};
     this.userService.verifyUser(userData)
     .subscribe(response =>{
     if(username == username && password == password){
       localStorage.setItem("userId", JSON.stringify(response[0].userId));
       localStorage.setItem("username", JSON.stringify(response[0].username));
       localStorage.setItem("password", JSON.stringify(response[0].password));
     this.router.navigate(['main']);
     }
   });
 }

  // login(username: string, password: string): void {
  //   let UserLog = { username: username, password: password };

  //   this.userService.login(UserLog).subscribe(response => {

  //  login(){
  //    this.login()
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
