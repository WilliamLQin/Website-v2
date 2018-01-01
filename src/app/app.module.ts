import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';

import { RedirectComponent } from './redirect/redirect.component';
import { InfoViewComponent } from './info-view/info-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GridHomeComponent,
    RedirectComponent,
    InfoViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
