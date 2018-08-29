import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { 
  MatDialogModule, 
  MatProgressBarModule, 
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatIconModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule 
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { FeedViewComponent } from './feed-view/feed-view.component';
import { TableComponent } from './table/table.component';
import { FeedTableComponent } from './feed-table/feed-table.component';
import { SignalsComponent } from './signals/signals.component';
import { ScrollbarModule } from 'ngx-scrollbar';
import { CalendarComponent } from './calendar/calendar.component';
import { FeedModal } from './feed-view/feed-view.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://liteforex.com:8887', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FeedViewComponent,
    TableComponent,
    FeedTableComponent,
    SignalsComponent,
    CalendarComponent,
    FeedModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ScrollbarModule,
    MatProgressBarModule,
    MatDialogModule,
    SocketIoModule.forRoot(config) 
  ],
  entryComponents: [FeedModal],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
