import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    title = 'Register User';

  constructor(private userService: UsersService) {

   }

  ngOnInit() {
  }

  public users: Users = new Users(0,'','');

  public registerUser(): void{
    this.userService.registerUser(this.users)
    .subscribe();
  }

}
