import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';

import { RedirectComponent } from './redirect/redirect.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { Animations } from './animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridHomeComponent,
    RedirectComponent,
    InfoViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [Animations],
  bootstrap: [AppComponent]
})
export class AppModule { }
