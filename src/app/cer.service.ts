import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cer, Resp } from './cer';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CerService {
  CER: Cer[] = []; 
  private cer_url = 'https://liteforex.com:8887';
  private socket;  
  
  public sendMessage() {
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "EURUSD"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "USDJPY"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "GBPUSD"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "AUDUSD"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "NZDUSD"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "USDCAD"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "USDCHF"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "EURJPY"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "GBPJPY"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "BRENT"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "USCrude"});
    this.socket.emit('quotes_subscribe', {server: "80", symbol: "XAUUSD"});
  }



  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('q', (data) => {
            observer.next(data);
        });
    });
}


  constructor() { 
    this.socket = io(this.cer_url);
  }
}
