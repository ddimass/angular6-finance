import { Component, OnInit, ViewChild } from '@angular/core';
import { Signals } from '../signals';
import { SignalsService } from '../signals.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FeedService } from '../feed.service';
import { SelectedService } from '../selected.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit {
		sigm: Signals[];
	loading: boolean;
	dataSource = new MatTableDataSource<Signals>();
  	displayedColumns: string[] = ['group_name','ma10','macd', 'bbands', 'ichimoku', 'stochastic', 'williams', 'zigzag','recommendation_text'];

  constructor(private sig_serv: SignalsService, private feedService: FeedService, private sel_serv: SelectedService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
      setInterval(()=> { this.getSignals(); },60000); 
  		this.dataSource.paginator = this.paginator;
  		this.getSignals();
  		this.sel_serv.changePair.subscribe( val => {
        this.getSignals();
      });
  	}

  	getSignals() {
  		this.loading = true;
	  	this.sig_serv.getSignal();
	  	this.sig_serv.signal.subscribe(
	  		(data:Signals[]) => {this.dataSource.data = data;},
	  		error => console.log("Error: ", error),
	        () => {this.loading = false}
	  		);

  	}

}
