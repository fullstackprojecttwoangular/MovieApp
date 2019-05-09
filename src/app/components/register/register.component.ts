import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
  }

  
  oops: string = "SOMETHING WENT WRONG";

  add(username: string, password: string): void {
    if(username == "" || password == ""){
      return;
    }
    let user = {username: username, password: password}

    this.userService.registerUser(user).subscribe((response) => {
     
    });
  }
}