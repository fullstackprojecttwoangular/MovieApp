import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { UserLog } from '../../models/user-log.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  constructor(private userService: UsersService) {

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

  
  // login(username: string, password: string): void{
  //   let userLog = {username: username, password: password};
  //     this.userService.login(this.userLog)
  //     .subscribe();
  // }

  // login(username: string, password: string): void {
  //   let UserLog = { username: username, password: password };

  //   this.userService.tryLogin(UserLog).subscribe(response => {

   
}
