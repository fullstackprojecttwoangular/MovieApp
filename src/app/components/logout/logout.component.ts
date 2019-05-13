import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['main']);
  }
}
