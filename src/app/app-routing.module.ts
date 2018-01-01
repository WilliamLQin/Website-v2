import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: 'resume', component: RedirectComponent, data: {url: "/assets/downloads/WilliamQin-Resume.pdf"} }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
