import { Component,  OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  scheme: any;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Feed read', cols: 2, rows: 2 },
          { title: 'Feed table', cols: 2, rows: 1 },
          { title: 'Signals', cols: 2, rows: 1 },
          { title: 'Calendar', cols: 2, rows: 2 }
        ];
      }

      return [
        { title: 'Feed read', cols: 1, rows: 2 },
        { title: 'Feed table', cols: 1, rows: 1 },
        { title: 'Signals', cols: 1, rows: 1 },
        { title: 'Calendar', cols: 2, rows: 2 }
      ];
    })
  ).subscribe(data => this.scheme = data);
  ngOnInit() {

  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
