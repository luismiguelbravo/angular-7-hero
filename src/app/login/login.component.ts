import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onComplete = new EventEmitter<void>();
  private countdownEndRef: Subscription = null;

  currentUser : User;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.countdownEndRef = this.userService.countdownEnd$.subscribe(()=>{
      this.getCurrentUser();
    });
  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  cerrarSesion(): void {
    this.userService.logOut();
    this.currentUser = this.userService.getCurrentUser();
  }

  login(): void {
    this.userService.login("demo", "demo");
  }

}
