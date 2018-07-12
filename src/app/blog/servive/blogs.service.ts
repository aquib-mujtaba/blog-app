import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private _httpClint: HttpClient) { }

  httpOptions={
    header:new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem( 'authToken' )
    
    })
  };

  getBlogsList():Observable<any>
  {
    return this._httpClint.get(environment.apiBaseUrl+ 'blogs');
  }
}
