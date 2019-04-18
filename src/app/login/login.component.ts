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
  loginUser: User;
  errorAlLoguearse :any;
  showLoader: boolean;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.errorAlLoguearse = {Message: "", Description: ""};
    this.showLoader = false;
    this.getCurrentUser();
    this.countdownEndRef = this.userService.countdownEnd$.subscribe(()=>{
      this.getCurrentUser();
      this.errorAlLoguearse = this.userService.getErrorAlLoguearse();
      this.showLoader = false;
    });
    this.loginUser =  {'username' : null, password: null,'access_token' : null};
  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  cerrarSesion(): void {
    this.userService.logOut();
    this.currentUser = this.userService.getCurrentUser();
  }

  login(): void {
    this.showLoader = true;
    this.errorAlLoguearse = {Message: "", Description: ""};
    this.userService.login(this.loginUser.username, this.loginUser.password);
  }

}
