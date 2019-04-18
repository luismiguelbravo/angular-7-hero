import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getAll(token):any {

    var header = {
    headers: new HttpHeaders()
      .set('access_token',  token)
    }
    
    this.http.get<any>("/getListaDePaises", header)
      .subscribe( (data: any) => {
        console.log(" ======== data ======== ");
        console.log(data);
      }, error => {
        console.log(" ======== error ========");
        console.log(error);
      });
  }


}
