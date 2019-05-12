import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {Router} from '@angular/router';
import { Users } from '../../models/users';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  users: Users ={
      userId: parseInt(localStorage.getItem("userId")),
      username: JSON.parse(localStorage.getItem("username")),
      password: "",
      favoriteMovies:JSON.parse(localStorage.getItem("favoriteMovies")),
     
  }

  redirectUrl(id: string) {
    localStorage.setItem("movieId", id);
    this.router.navigateByUrl("/movie-detail");
  }

}
