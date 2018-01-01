import { Component, OnInit, HostListener } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css'],
  host: {
    '[@routeAnimation]': 'true',
    '[style.display]': "'block'",
    '[style.position]': "'absolute'",
    '[style.width]': "'100%'",
    '[style.height]': "'100%'"
  },
  animations: Animations.infoView
})
export class InfoViewComponent implements OnInit {

  viewOffset: number = 20;
  boxRounding: number = 60;

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
  }

}
