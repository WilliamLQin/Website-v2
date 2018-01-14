import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DomSanitizer } from '@angular/platform-browser';

import { trigger, transition, style, animate, state } from '@angular/animations';

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
  animations: [
    trigger('routeAnimation', [
        state('*', style({transform: 'translateY(0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translateY(5%)', opacity: 0}),
            animate('150ms')
        ]),
        transition('* => void', [
            animate('150ms', 
                style({transform: 'translateY(5%)', opacity: 0})
            )
        ])
    ])
  ]
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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private title: Title, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.createView();

    this.route.data
      .subscribe(data => {
        var parseData = Object.keys(data).map(key => data[key])
        var url: string = parseData[0];
        this.http.get(url, {responseType: 'text'})
        .subscribe(
          (data: string) => {
            this.myTemplate = this.sanitizer.bypassSecurityTrustHtml(data);
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
