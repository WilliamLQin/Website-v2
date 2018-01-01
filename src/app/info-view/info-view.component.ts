import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {

  viewOffset: number;
  boxRounding: number;

  deviceWidth: number;
  deviceHeight: number;

  html: string = "<p>this is working!</p>";

  constructor() { }

  ngOnInit() {
    this.createView();
  }

  @HostListener('window:resize') onResize() {
    this.createView();
  }

  createView() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;

    this.viewOffset = 20;
    this.boxRounding = 60;
  }

}
