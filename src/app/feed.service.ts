import { Injectable,  Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Feed } from './feed';
import { SelectedService } from './selected.service';
//import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
	feed: Feed;
	loading: boolean;
	feeds_ret: Observable<Feed[]> = of([]);
	data: Feed[]=[];

	constructor(private http: HttpClient, public selected_serv: SelectedService) { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();

	getFeeds(): void {
		this.loading = true;
		let feedUrl = '/api/analytics/?token=f984357eab59537962aab2cc190a7fe3&out_type=json&lang=en&pair_like='+this.selected_serv.getselectedpair().symbol+'&order=created_at&order_type=desc';
		this.feeds_ret = this.http.get<Feed[]>(feedUrl).pipe(map(resp => {
			let feeds: Feed[] = [];
			let feed: Feed;
			for (let key in resp['items']) {
				feed = resp['items'][key];
				feeds.push(feed);
			}
			 return feeds.reverse();
		}),
		catchError(this.handleError('getFeeds', [])
		));
		//return new this.feeds_ret;
	}
	getData(): void {
		this.change.emit(true);
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
