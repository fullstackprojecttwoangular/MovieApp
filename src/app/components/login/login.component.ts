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
   public userData: Users = new Users(0,'','');
  ngOnInit() {
  }
  
  // public login(): void{
  //   this.userService.login(this.users})
  //     .subscribe(
  //       data => this.userData = data
  //     );
  // }

  public login(): void{
    this.userService.login(this.users)
    .subscribe();
  }
  
  // login(username: string, password: string): void{
  //   let userLog = {username: username, password: password};
  //     this.userService.login(this.userLog)
  //     .subscribe();
  // }

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
