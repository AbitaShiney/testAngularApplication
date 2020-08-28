import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { BarChartComponent } from './second-section-bar-chart/second-section-bar-chart.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ChartService } from './services/chart.service';
import { WebsocketService } from './services/websocket.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    BarChartComponent,
    ThirdSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ChartService, WebsocketService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
