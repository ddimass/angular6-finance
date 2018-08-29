import { Injectable } from '@angular/core';
import { Pair } from './pair';

@Injectable({
  providedIn: 'root'
})
export class PairsService {
	pairs_list: Pair[] = [		
	{name: "EUR/USD", symbol: "EURUSD", country: ["us","eu"] }, 
	{name: "GBP/USD", symbol: "GBPUSD", country: ["gb","us"] }, 
	{name: "USD/JPY", symbol: "USDJPY", country: ["us","jp"] }, 
	{name: "AUD/USD", symbol: "AUDUSD", country: ["au","us"] }, 
	{name: "NZD/USD", symbol: "NZDUSD", country: ["nz","us"] }, 
	{name: "USD/CAD", symbol: "USDCAD", country: ["us","ca"] }, 
	{name: "USD/CHF", symbol: "USDCHF", country: ["us","cn"] }, 
	{name: "EUR/JPY", symbol: "EURJPY", country: ["eu","jp"] }, 
	{name: "GBP/JPY", symbol: "GBPJPY", country: ["gb","jp"] }, 
	{name: "BRENT", symbol: "BRENT", country: ["us","ru"] }, 
	{name: "USCrude", symbol: "USCrude", country: ["us","ru"] }, 
	{name: "Gold", symbol: "XAUUSD", country: ["us","ru"] }] 
	uniq = new Map ([["EURUSD", 0], ["GBPUSD", 0], ["USDJPY", 0], ["AUDUSD", 0], ["NZDUSD", 0], ["USDCAD", 0], ["USDCHF", 0], ["EURJPY", 0], ["Silver", 0], ["BRENT", 0], ["USCrud", 0], ["Gold", 0]]);
	trend = new Map ([["EURUSD", 0], ["GBPUSD", 0], ["USDJPY", 0], ["AUDUSD", 0], ["NZDUSD", 0], ["USDCAD", 0], ["USDCHF", 0], ["EURJPY", 0], ["Silver", 0], ["BRENT", 0], ["USCrud", 0], ["Gold", 0]]);

	add(pair: Pair) {
	if (!this.uniq.has(pair.name)) {
		this.uniq.set(pair.name, 0)
		this.pairs_list.push(pair);
	}
	}

	remove(pair: Pair) {
		this.pairs_list = this.pairs_list.filter(item => item !== pair);
		this.uniq.delete(pair.name);
	}


	clear() {
		this.pairs_list = [];
		this.uniq = new Map();
	}

  constructor() { }
}
