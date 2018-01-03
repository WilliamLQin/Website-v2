import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridHomeComponent } from './grid-home/grid-home.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NewtabComponent } from './redirect/newtab.component';


const routes: Routes = [
  { path: 'about', component: InfoViewComponent, data: {htmlPath: "../assets/pages/about.html", fillColor: "rgb(230, 255, 230)"} },
  { path: 'awards', component: InfoViewComponent, data: {htmlPath: "../assets/pages/awards.html", fillColor: "rgb(230, 230, 255)"} },

  { path: 'resume', component: NewtabComponent, data: {url: "../assets/downloads/WilliamQin-Resume.pdf"} },
  { path: 'blog', component: NewtabComponent, data: {url: "http://blog.williamqin.com"} },

  { path: 'plant', component: InfoViewComponent, data: {htmlPath: "../assets/pages/plant.html", fillColor: "rgb(255, 255, 230)"} },
  { path: 'visionmotion', component: InfoViewComponent, data: {htmlPath: "../assets/pages/vision-motion.html", fillColor: "rgb(255, 230, 255)"} },

  { path: 'email', component: RedirectComponent, data: {url: "mailto:hello@williamqin.com"} },
  { path: 'github', component: NewtabComponent, data: {url: "https://github.com/WilliamLQin"} },
  { path: 'linkedin', component: NewtabComponent, data: {url: "https://www.linkedin.com/in/williamqin"} },
  { path: 'devpost', component: NewtabComponent, data: {url: "https://devpost.com/williamqin"} }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }