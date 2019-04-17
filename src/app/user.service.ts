import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser : User;

  constructor(private http: HttpClient) { }

  getUser(): User {
    return this.currentUser;
  }

  login(username: string, password: string) {
    return this.http.get<any>("Authorized?data=%7B%22username%22:%22" + username + "%22,%22password%22:%22" + password +  "%22%7D" )
  }

}
