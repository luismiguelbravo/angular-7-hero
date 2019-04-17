import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from "rxjs";
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'www.senegocia.cl';
  currentUser : User;
  
  private countdownEndRef: Subscription = null;  
  private logOutEndSubscription: Subscription = null;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.countdownEndRef = this.userService.countdownEnd$.subscribe(()=>{
      this.getCurrentUser();
    });

    this.logOutEndSubscription = this.userService.logOutEnd$.subscribe(()=>{
      this.getCurrentUser();
    });

  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser();
  }


}
