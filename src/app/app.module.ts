import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { InfoViewComponent } from './info-view/info-view.component';

import { RedirectComponent } from './redirect/redirect.component';
import { NewtabComponent } from './redirect/newtab.component';



@NgModule({
  declarations: [
    AppComponent,
    GridHomeComponent,
    InfoViewComponent,
    RedirectComponent,
    NewtabComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
