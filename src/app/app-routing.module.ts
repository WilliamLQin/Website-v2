import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { RedirectComponent } from './redirect/redirect.component';
import { InfoViewComponent } from './info-view/info-view.component';

const routes: Routes = [
  { path: 'resume', component: RedirectComponent, data: {url: "../assets/downloads/WilliamQin-Resume.pdf"} },
  { path: 'about', component: InfoViewComponent, data: {htmlPath: "../assets/pages/about.html", fillColor: "rgb(230, 255, 230)"} }
];2


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
