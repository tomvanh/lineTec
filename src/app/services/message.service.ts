import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = 'http://localhost:81/api';

  constructor(private http: HttpClient) { }

  send(message: Message) {
    return this.http.post(`${this.baseUrl}/send.php`, { data: message });
    // return this.http.post(`${this.baseUrl}/send.php`, { data: message }).pipe(
    //   catchError(err => this.handleError(err))
    // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
