import { GridTile } from './grid-tile';

const hexSizeOneViewBox = '0 0 256 256';
const hexSizeOneSVGPoints = '128 0 17.15 64 17.15 192 128 256 238.85 192 238.85 64 128 0';

export const TILES: GridTile[] = [
    {
        index: 0,
        x: 0, 
        y: 0, 
        size: 92, 
        viewBox: hexSizeOneViewBox,
        svgPoints: hexSizeOneSVGPoints, 
        imagePath: "/assets/img/Hex_Green Hex.svg",
        hoverPath: "/assets/img/Hex_Green Filled Hex.svg", 
        name: "test", 
        description: "this is a test!", 
        hovering: false
    }
]