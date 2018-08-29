import { Component, OnInit, Inject } from '@angular/core';
import { Feed } from '../feed';
import { SelectedService } from '../selected.service';
import { FeedService } from '../feed.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { getOrCreateChangeDetectorRef } from '@angular/core/src/render3/di';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.css']
})
export class FeedViewComponent implements OnInit {
	disp_feed: Feed;
  isLoading: boolean;

  constructor(private sel_serv: SelectedService, public feed_serv: FeedService, public dialog: MatDialog) { }

  ngOnInit() {

  	this.sel_serv.changeFeed.subscribe( val => this.disp_feed = this.sel_serv.selectedFeed );	
  }
  opendialog() {
    const dialogRef = this.dialog.open(FeedModal, {
      data: this.disp_feed
    });
  }
  trade() {
    window.open("https://my.liteforex.com/ru/trading/chart?symbol="+ this.sel_serv.selectedPair.symbol +"&returnUrl=true", "_blank");
  }
  

}


@Component({
  selector: 'feed-modal',
  templateUrl: 'feed-modal.html',
})

export class FeedModal {
  constructor( @Inject(MAT_DIALOG_DATA) public data: Feed) {}

}