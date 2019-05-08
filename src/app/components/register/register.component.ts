import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users.model';
import { UserService } from '../../services/user.service';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
