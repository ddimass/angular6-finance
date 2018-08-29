import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SelectedService } from './selected.service';
import { Candlestick } from './candlestick';
import { Signals, MultSignals } from './signals';



@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  signal: Observable<Signals[]> = of([]);

  constructor(private http: HttpClient, public selected_serv: SelectedService) { }

	getSignal(): void {
		let signalUrl = '/api/signals/?token=f984357eab59537962aab2cc190a7fe3&out_type=json&lang=en';
		this.signal = this.http.get<Signals[]>(signalUrl).pipe(map(resp => {
      let sig: Signals;
      let sigm: Signals[] = [];
      for (let key in resp['items']) {
        sig = resp['items'][key];
        if ((sig.pair.toLowerCase() == this.selected_serv.selectedPair.symbol.toLowerCase())) {
          sigm.push(sig);
        }
      }
      return sigm;
    }),
		catchError(this.handleError('getSignal', [])
		));
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
