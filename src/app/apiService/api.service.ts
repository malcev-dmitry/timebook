import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:4201';

  constructor(private http: HttpService) { }

  public getCountRows(): Observable<any> {
    const substring = '/count';
    const subject = new Subject();
    const url = this.apiUrl + substring;

    this.http.getData(url)
      .subscribe((response) => {
        localStorage['count'] = JSON.stringify(response[0]);
        subject.next(response);
      }, (error) => {
        subject.error(error);
      });

    return subject;
  }

  public getIntervalRows(id: number, limit: number): Observable<any> {
    const substring = '/interval/' + id + '/' + limit;
    const subject = new Subject();
    const url = this.apiUrl + substring;

    this.http.getData(url)
      .subscribe((response) => {
        localStorage['bookmarks'] = JSON.stringify(response);
        subject.next(response);
      }, (error) => {
        subject.error(error);
      });

    return subject;
  }

  public addRow(data: string): Observable<any> {
    const substring = '/bookmarks/add';
    const subject = new Subject();
    const url = this.apiUrl + substring;

    this.http.postData(url, data)
      .subscribe((response) => {
        subject.next(response);
      }, (error) => {
        subject.error(error);
      });

    return subject;
  }

  public DeleteRows(data: number[]): Observable<any> {
    const substring = '/del';
    const subject = new Subject();
    const url = this.apiUrl + substring;

    this.http.deleteData(url, data)
      .subscribe((response) => {
        subject.next(response);
      }, (error) => {
        subject.error(error);
      });

    return subject;
  }
}
