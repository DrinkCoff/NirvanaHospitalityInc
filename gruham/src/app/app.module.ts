import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayOutlookComponent } from './day-outlook/day-outlook.component';
import { AngularWeatherWidgetModule } from './weather-lib/public_api';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DayOutlookComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularWeatherWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
