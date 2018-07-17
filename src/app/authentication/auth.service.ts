import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }
  
  httpOptions={
    header:new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem( 'authToken' )
    
    })
  };

  login(loginModel):Observable<any>
  {
    return this._httpClient.post(`${environment.apiBaseUrl}/login/`,loginModel)
  }
}
