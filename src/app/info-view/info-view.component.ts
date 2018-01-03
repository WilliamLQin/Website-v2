import { Component, OnInit, HostListener } from '@angular/core';
import { Animations } from '../animations';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class InfoViewComponent implements OnInit, OnDestroy {

  myTemplate: any = "";

  viewOffset: number = 40;
  boxRounding: number = 50;
  exitRectThickness: number = 15;
  circleOffset: number = 10;
  circleSize: number = 38;

  fillColor: string = "fill:white";

  deviceWidth: number;
  deviceHeight: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit() {
    this.createView();

    this.route.data
      .subscribe(data => {
        var parseData = Object.keys(data).map(key => data[key])
        var url: string = parseData[0];
        this.http.get(url, {responseType: 'text'})
        .subscribe(
          (data: string) => {
            this.myTemplate = data;
          }
        )

        this.fillColor = parseData[1];
      });
  }

  ngOnDestroy() {
    this.title.setTitle("William Qin");
  }

  @HostListener('window:resize') onResize() {
    this.createView();
  }

  createView() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
  }

  exit() {
    this.router.navigate(["/"]);
  }

}