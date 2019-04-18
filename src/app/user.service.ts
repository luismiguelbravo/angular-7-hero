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
  errorAlLoguearse : any;

    private countdownEndSource = new Subject<void>();
    public countdownEnd$ = this.countdownEndSource.asObservable();

    private logOutEnd = new Subject<void>();
    public logOutEnd$ = this.logOutEnd.asObservable();

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
    this.usuario = {'username' : null, password: null,'access_token' : null};
    this.http.get<any>("Authorized?data=%7B%22username%22:%22" + 
      username + "%22,%22password%22:%22" + password +  "%22%7D" )
        .subscribe( (data: any) => {
                  this.usuario.username = username;
                  this.usuario.access_token = data.access_token;
                  localStorage.setItem('currentUser', JSON.stringify(this.usuario));
                  this.currentUserSubject.next(this.usuario);
                  this.countdownEndSource.next();
                }, error => {

                  console.log("");
                  console.log(" ============== error al loguearse ==============");
                  console.log(error.error);
                  console.log(" ============== error al loguearse ==============");
                  console.log("");

                  this.errorAlLoguearse = error.error;
                  this.countdownEndSource.next();
              });
  }

  logOut(): void {
    // Elimino al currentUser del local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.logOutEnd.next();
  }

  getErrorAlLoguearse() {
    return this.errorAlLoguearse;
  }

}
