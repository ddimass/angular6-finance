import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectedService } from '../selected.service';
import { FeedService } from '../feed.service';
import { PairsService } from '../pairs.service';
import { Pair } from '../pair';
import { CerService } from '../cer.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  data: any;
  pairs: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(public pservice: PairsService, private breakpointObserver: BreakpointObserver, public selected_serv: SelectedService, public feed_serv: FeedService, public cer_serv: CerService) {}
ngOnInit(): void {
  this.cer_serv.sendMessage();
  this.cer_serv.getMessages().subscribe(data => this.setTrend(data));
  console.log(this.pservice.uniq.get('EURUSD'));
}
   setTrend(data: any) {
      let marg = this.pservice.uniq.get(data[1]) - data[2];
      this.pservice.uniq.set(data[1],data[2]);
      if (marg > 0) {this.pservice.trend.set(data[1],1)} else {this.pservice.trend.set(data[1],-1)}
   }
  setpair(pair: Pair) {
  	this.selected_serv.setselectedpair(pair);
    this.feed_serv.getData();
  }
  check(pair): boolean {
    if (pair.name === this.selected_serv.selectedPair.name) {
      return true;
    }
    return false;
  }
  
  }
