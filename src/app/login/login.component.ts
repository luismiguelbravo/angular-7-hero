import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser : User;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser();
    
    console.log("");
    console.log(" =========== this.currentUser : login.component.ts =========== ");
    console.log(this.currentUser);
    console.log(" =========== this.currentUser : login.component.ts =========== ");
    console.log("");
  }

}
