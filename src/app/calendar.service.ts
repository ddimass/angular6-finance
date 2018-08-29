import { Injectable,  Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Feed } from './feed';
import { SelectedService } from './selected.service';
import { Calendar } from './calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
	calend: Observable<Calendar[]> = of([]);

  constructor(private http: HttpClient, public selected_serv: SelectedService) { }

  	getCalends(): void {
		let calendarUrl = '/api/calendar/?token=f984357eab59537962aab2cc190a7fe3&out_type=json&lang=en&countries='+this.selected_serv.selectedPair.country.join();
		this.calend = this.http.get<Calendar[]>(calendarUrl).pipe(map(resp => {
			let cals: Calendar[] = [];
			let cal: Calendar;
			for (let key in resp['items']) {
				cal = resp['items'][key];
				cals.push(cal);
			}
			 return cals.reverse();
		}),
		catchError(this.handleError('getCalendar', [])
		));
		//return new this.feeds_ret;
	}
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
