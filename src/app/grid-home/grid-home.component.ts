import { Component, OnInit, HostListener } from '@angular/core';
import { GridBlock } from '../grid-block';
import { GridTile, TILES } from '../grid-tile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.css'],
  animations: Animations.gridHome
})
export class GridHomeComponent implements OnInit {

  sin60: number = Math.sqrt(3)/2;

  blocks: GridBlock[];
  tiles = TILES;
  deviceHeight: number;
  deviceWidth: number;
  viewBox: string;

  blockSize: number = 86;
  svgBlockSize: number = 256;
  svgToGridRatio: number;

  mainPath: string = "../assets/hex/Main Images/Main_Portrait-min.jpg";
  currentMainPath: string = "";
  mainHovering: boolean = false;
  hoverTitle: string;
  hoverDescription: string;

  layoutBlocks(): void {
    var blockWidth: number = this.blockSize;
    var blockHeight: number = this.blockSize;

    blockWidth *= this.sin60;

    this.blocks = [];
    var currRing: number = 2;
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
          var randColor: string = "Blue";

          // var rand: number = Math.random();
          // if (rand < 0.25) {
          //   randColor = "Red";
          // }
          // else if (rand < 0.5) {
          //   randColor = "Green";
          // }
          // else if (rand < 0.75) {
          //   randColor = "Yellow";
          // }

          this.blocks.push({ring: currRing, pos: currPos, x: currX, y: currY, color: randColor});
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

  constructor(private router: Router, private title:Title) { }

  ngOnInit() {
    this.title.setTitle("William Qin");
    this.currentMainPath = this.mainPath;
    this.createGrid();
  }

  @HostListener('window:resize') onResize() {
    this.createGrid();
  }

  onTileHover(index: number) {
    this.mainHovering = true;

    if (index == -1) {
      this.currentMainPath = this.mainPath;
      this.hoverTitle = "About";
      this.hoverDescription = "Welcome to my website!\nHover and click on any of the hexes to learn more about me!";
    }
    else {
      this.tiles[index].hovering = true;
      this.currentMainPath = this.tiles[index].mainPath;
      this.hoverTitle = this.tiles[index].title;
      this.hoverDescription = this.tiles[index].description;
    }
  }

  onTileLeave(index: number) {
    if (index == -1) {
      this.mainHovering = false;
    }
    else {
      this.tiles[index].hovering = false;
      // this.currentMainPath = this.mainPath;
    }
  }

  onTileClick(index: number) {
    if (index == -1) {
      this.title.setTitle("William Qin | About");
      this.router.navigate(['/about']);
    }
    else {
      this.title.setTitle("William Qin" + this.tiles[index].tabTitle);
      this.router.navigate([this.tiles[index].targetURL]);
    }
  }

}
