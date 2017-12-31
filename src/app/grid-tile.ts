export class GridTile {
    index: number;
    x: number;
    y: number;
    size: number;
    svgPoints: string;
    imagePath: string;
    hoverPath: string;
    name: string;
    description: string;
    hovering: boolean;
}

const hexSizeOneSVGPoints = '128 0 17.15 64 17.15 192 128 256 238.85 192 238.85 64 128 0';
const hexSizeFiveSVGPoints = '997.68 682.25 1108.5 618.25 1108.5 490.25 997.68 426.25 997.65 298.25 886.85 234.25 886.8 106.25 775.95 42.25 665.1 106.25 554.25 42.25 443.4 106.25 332.55 42.25 221.7 106.25 221.7 234.25 110.85 298.25 110.85 426.25 -0.01 490.25 -0.01 618.25 110.85 682.25 110.85 810.25 221.7 874.25 221.7 1002.25 332.55 1066.25 443.4 1002.25 554.25 1066.25 665.1 1002.25 775.95 1066.25 886.8 1002.25 886.83 874.25 997.65 810.25 997.68 682.25'

export const TILES: GridTile[] = [
    {
        index: 0,
        x: 0,
        y: 0,
        size: 393,
        svgPoints: hexSizeFiveSVGPoints,
        imagePath: "/assets/img/Hex_Portrait.svg",
        hoverPath: "/assets/img/Hex_Blue Filled Hex.svg",
        name: "portrait",
        description: "it's me!",
        hovering: false
    },
    {
        index: 1,
        x: 159.35, 
        y: 138, 
        size: 92, 
        svgPoints: hexSizeOneSVGPoints, 
        imagePath: "/assets/img/Hex_Green Hex.svg",
        hoverPath: "/assets/img/Hex_Green Filled Hex.svg", 
        name: "test", 
        description: "this is a test!", 
        hovering: false
    }
    
]