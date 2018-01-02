import { Component, OnInit, HostListener } from '@angular/core';
import { Animations } from '../animations';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

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

  private myTemplate: any = "";

  viewOffset: number = 20;
  boxRounding: number = 60;

  fillColor: string = "fill:white";

  deviceWidth: number;
  deviceHeight: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

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

  @HostListener('window:resize') onResize() {
    this.createView();
  }

  createView() {
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
  }

}
