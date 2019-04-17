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
      console.log("");
      console.log(" =========== termino el logueo =========== ");
      console.log("");
      this.getCurrentUser();
    });
  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser();
    
    console.log("");
    console.log(" =========== this.currentUser : login.component.ts =========== ");
    console.log(this.currentUser);
    console.log(" =========== this.currentUser : login.component.ts =========== ");
    console.log("");
  }

  cerrarSesion(): void {
    this.userService.logOut();
    this.currentUser = this.userService.getCurrentUser();
  }

  login(): void {
    let cualquiervaina = this.userService.login("demo", "demo");
  }

}
