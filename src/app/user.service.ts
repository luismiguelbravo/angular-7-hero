import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  currentUser : Observable<User>;
  usuario : User;

    private countdownEndSource = new Subject<void>();
    public countdownEnd$ = this.countdownEndSource.asObservable();

  constructor(private http: HttpClient) {
    // this.currentUser = new User();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.usuario = this.currentUserSubject.value;
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string):any {
    this.usuario = {'username' : null, 'access_token' : null};
    this.http.get<any>("Authorized?data=%7B%22username%22:%22" + 
      username + "%22,%22password%22:%22" + password +  "%22%7D" )
        .subscribe( (data: any) => {
                  console.log(data);
                  this.usuario.username = username;
                  this.usuario.access_token = data.access_token;
                  console.log(" ");
                  console.log(" ========= this.usuario ========= ");
                  console.log(this.usuario);
                  console.log(" ========= this.usuario ========= ");
                  console.log(" ");
                  localStorage.setItem('currentUser', JSON.stringify(this.usuario));
                  this.currentUserSubject.next(this.usuario);
                  // return this.usuario;
                  this.countdownEndSource.next();
                }, error => {
                  // return this.usuario;
                  console.log('Error');
                  console.log(error);
                  this.countdownEndSource.next();
              });
  }

  logOut(): void {
    // Elimino al currentUser del local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
