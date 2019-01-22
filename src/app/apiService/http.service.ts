import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public getData( url: string): Observable<any> {
    return this.http.get(url);
  }

  public postData( url: string, dataContent: string): Observable<any> {
    return this.http.post(url, dataContent);
  }
}
