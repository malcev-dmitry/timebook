import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:4201';

  constructor(private http: HttpService) { }

  public getAllRows(): Observable<any> {
    const substring = '/bookmarks';
    const subject = new Subject();
    const url = this.apiUrl + substring;

    this.http.postRows(url)
      .subscribe((response) => {
        localStorage['bookmarks'] = JSON.stringify(response);
        subject.next(response);
      }, (error) => {
        subject.error(error);
      });

    return subject;
  }
}
