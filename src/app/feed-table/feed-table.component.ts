import { Component, OnInit, ViewChild } from '@angular/core';
import { Feed } from '../feed';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FeedService } from '../feed.service';
import { SelectedService } from '../selected.service';

@Component({
  selector: 'app-feed-table',
  templateUrl: './feed-table.component.html',
  styleUrls: ['./feed-table.component.css']
})
export class FeedTableComponent implements OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	displayedColumns: string[] = ['created_at', 'type', 'title'];
  	isLoadingResults = false;
  	dataSource = new MatTableDataSource<Feed>();
  	disp_feed: Feed;

  constructor(public feedService: FeedService, private sel_serv: SelectedService) { }

  ngOnInit() {
  	this.getFeeds();
      this.dataSource.paginator = this.paginator;
      this.feedService.change.subscribe( val => {
        this.getFeeds();
      });
  }
  getFeeds(): void {
      this.isLoadingResults = true;
        this.feedService.getFeeds();
        this.feedService.feeds_ret.subscribe( 
          (data:Feed[]) => {this.dataSource.data = data; this.disp_feed = data[0]},
          error => console.log("Error: ", error),
          () => {this.isLoadingResults = false;  this.sel_serv.setselectedFeed(this.disp_feed); this.feedService.loading = false;}
          );
        }
    getRecord(row) {
      this.disp_feed = row;
      this.sel_serv.setselectedFeed(row);
    }

}
