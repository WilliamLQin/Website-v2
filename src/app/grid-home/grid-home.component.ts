import { Component, OnInit } from '@angular/core';
import { GridBlock } from '../grid-block';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.css']
})
export class GridHomeComponent implements OnInit {

  blocks: GridBlock[];
  deviceHeight: number;
  deviceWidth: number;

  layoutGrid(blockSize:number): void {
    var blockWidth: number = blockSize;
    var blockHeight: number = blockSize;

    blockWidth *= Math.sqrt(3)/2;
    blockWidth -= 0.75;

    this.blocks = [];
    this.blocks = [{ring: 0, pos: 0, x: 0, y: 0, size: blockSize}];
    var currRing: number = 0;
    var currPos: number = 0;
    var currX: number = 0;
    var currY: number = 0;
    var currPerimeter: number = 0;
    while ((Math.abs(currX*2) < this.deviceWidth || Math.abs(currY*2) < this.deviceHeight) && currRing < 100) {
      currRing++;
      currPerimeter = currRing*6;
      currX = currRing * blockWidth;
      currY = 0;
      for (currPos = 0; currPos < currPerimeter; currPos++) {
        if (Math.abs(currX*2) < (this.deviceWidth + blockWidth) && Math.abs(currY*2) < (this.deviceHeight + blockHeight)) {
          this.blocks.push({ring: currRing, pos: currPos, x: currX, y: currY, size: blockSize});
        }
        if (currPos < currPerimeter*(1/6)) {
          currX -= (1/2) * blockWidth;
          currY += (Math.tan(Math.PI / 3)/2) * blockWidth;
        }
        else if (currPos < currPerimeter*(2/6)) {
          currX -= blockWidth;
        }
        else if (currPos < currPerimeter*(3/6)) {
          currX -= (1/2) * blockWidth;
          currY -= (Math.tan(Math.PI / 3)/2) * blockWidth;
        }
        else if (currPos < currPerimeter*(4/6)) {
          currX += (1/2) * blockWidth;
          currY -= (Math.tan(Math.PI / 3)/2) * blockWidth;
        }
        else if (currPos < currPerimeter*(5/6)) {
          currX += blockWidth;
        }
        else {
          currX += (1/2) * blockWidth;
          currY += (Math.tan(Math.PI / 3)/2) * blockWidth;
        }
        
      }
    }

  }

  createBlocks() {
    this.deviceHeight = window.innerHeight;
    this.deviceWidth = window.innerWidth;

    this.layoutGrid(92);
  }

  constructor() {}

  ngOnInit() {
    this.createBlocks();
  }

  @HostListener('window:resize') onResize() {
    this.createBlocks();
  }

}
