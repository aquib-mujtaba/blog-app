import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private _httpClient: HttpClient) { }

  httpOptions={
    header:new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem( 'authToken' )
    
    })
  };

  getBlogsList():Observable<any>
  {
    return this._httpClient.get(environment.apiBaseUrl+ '/blogs');
  }
  getBlogDetails(id:number): Observable<any>{
    return this._httpClient.get(`${environment.apiBaseUrl}/blogs/${id}`)
  }

  getBlogComments(id:number):Observable<any>
  {
    return this._httpClient.get(`${environment.apiBaseUrl}/blogs/${id}/comments`)
  }
  getAuthorsList():Observable<any>
  {
    return this._httpClient.get(environment.apiBaseUrl+ '/authors')
  }


  postComments(id:number,comments):Observable<any>
  {
    return this._httpClient.post(`${environment.apiBaseUrl}/blogs/${id}/comments`,comments)
  }
  postBlog(postBlog):Observable<any>
  {
    return this._httpClient.post(`${environment.apiBaseUrl}/blogs/`,postBlog)
  }
}
