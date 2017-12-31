import { Component, OnInit, HostListener } from '@angular/core';
import { GridBlock } from '../grid-block';
import { GridTile, TILES } from '../grid-tile';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.css']
})
export class GridHomeComponent implements OnInit {
  
  blocks: GridBlock[];
  tiles = TILES;
  deviceHeight: number;
  deviceWidth: number;
  viewBox: string;

  blockSize: number = 92;
  svgBlockSize: number = 256;
  svgToGridRatio: number;

  layoutBlocks(): void {
    var blockWidth: number = this.blockSize;
    var blockHeight: number = this.blockSize;

    blockWidth *= Math.sqrt(3)/2;
    blockWidth -= 0.75;

    this.blocks = [];
    this.blocks = [{ring: 0, pos: 0, x: 0, y: 0, size: this.blockSize}];
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
          this.blocks.push({ring: currRing, pos: currPos, x: currX, y: currY, size: this.blockSize});
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

  createGrid() {
    this.deviceHeight = window.innerHeight;
    this.deviceWidth = window.innerWidth;

    this.svgToGridRatio = this.svgBlockSize / this.blockSize;

    this.viewBox = "0 0 " + this.deviceWidth * this.svgToGridRatio + " " + this.deviceHeight * this.svgToGridRatio;

    this.layoutBlocks();
  }

  constructor() {}

  ngOnInit() {
    this.createGrid();
  }

  @HostListener('window:resize') onResize() {
    this.createGrid();
  }

  onTileHover(index: number) {
    this.tiles[index].hovering = true;
  }

  onTileLeave(index: number) {
    this.tiles[index].hovering = false;
  }

}
