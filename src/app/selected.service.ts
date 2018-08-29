import { Injectable,  Output, EventEmitter } from '@angular/core';
import { Pair } from './pair';
import { FeedService } from './feed.service';
import { Feed } from './feed';

@Injectable({
  providedIn: 'root'
})
export class SelectedService {
	selectedFeed: Feed;
	selectedPair: Pair = {name: "EUR/USD", symbol: "EURUSD", country: ["eu","us"] };

	@Output() changeFeed: EventEmitter<boolean> = new EventEmitter();
	@Output() changePair: EventEmitter<boolean> = new EventEmitter();

	getselectedpair():Pair {
		return this.selectedPair;
	}
	setselectedpair(pair:Pair):void {
		this.selectedPair = pair;
		this.changePair.emit(true);
	}
	setselectedFeed(feed: Feed) {
		this.selectedFeed = feed;
		this.changeFeed.emit(true);

	}


  constructor() { }
}
