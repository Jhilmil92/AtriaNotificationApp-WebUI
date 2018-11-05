import { Injectable } from '@angular/core';
import { Event } from '../../model/event.model';
import { Observable, of } from 'rxjs';
import { mockEvents } from '../mock-events';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    // return of(mockEvents);
    return this.http.get<Event[]>(`${environment.apiEndPoint}/api/event`)
      .pipe(
        tap(banners => {
          this.log('fetched Event');
          console.log(banners);
        }),
        catchError(this.handleError('getEvents', []))
      );
  }

  getMockEvents(): Observable<Event[]> {
    return of(mockEvents);
  }

  private log(arg0: string): any {
    console.log(arg0);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
