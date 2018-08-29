import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '../calendar';
import { CalendarService } from '../calendar.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectedService } from '../selected.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	displayedColumns: string[] = ['time', 'country_name', 'priority_','event', 'previous'];
  	isLoadingResults = false;
  	dataSource = new MatTableDataSource<Calendar>();
	Calends: Calendar[];
  loading: boolean;
  constructor(private calend_serv: CalendarService, private sel_serv: SelectedService) { }

  ngOnInit() {
    this.getCals();
  	this.sel_serv.changePair.subscribe( data => {this.getCals()})
  }
  getCals() {
    this.loading = true;
  	this.calend_serv.getCalends();
  	this.calend_serv.calend.subscribe(data => this.dataSource.data = data,
          error => console.log("Error: ", error),
          () => {this.loading = false});
  	this.dataSource.paginator = this.paginator;

  }
  setCals(row) {
  	console.log(row);
  }

}

