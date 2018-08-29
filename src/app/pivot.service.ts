import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SelectedService } from './selected.service';
import { Candlestick } from './candlestick';

@Injectable({
  providedIn: 'root'
})
export class PivotService {

  constructor(private http: HttpClient, public selected_serv: SelectedService) { }

  	getCandles(): Observable<Candlestick[]> {
		let pivotUrl = '/api/pivot/?token=f984357eab59537962aab2cc190a7fe3&out_type=json&lang=en&pairs='+this.selected_serv.getselectedpair().symbol;
    //console.log(pivotUrl);
		return this.http.get<Candlestick[]>(pivotUrl).pipe(map(resp => {
			//console.log(resp[this.selected_serv.getselectedpair().symbol]);
			return resp[this.selected_serv.getselectedpair().symbol];
		}),
		catchError(this.handleError('getPivot', [])
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
