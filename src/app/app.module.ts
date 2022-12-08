import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIcalendarModule } from 'ngx-icalendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIcalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
