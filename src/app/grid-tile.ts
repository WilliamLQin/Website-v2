export class GridTile {
    index: number;
    x: number; // number of tiles horizontally
    y: number; // number of tiles vertically
    size: number; // number of tiles horizontally
    svgPoints: string;
    imagePath: string;
    hoverPath: string;
    mainPath: string;
    title: string;
    description: string;
    targetURL: string;
    hovering: boolean;
}

const hexSizeOneSVGPoints = '128 0 17.15 64 17.15 192 128 256 238.85 192 238.85 64 128 0';
const hexSizeThreeSVGPoints = '554.2 204.53 554.2 76.5 443.35 12.5 332.5 76.5 221.65 12.5 110.8 76.5 110.8 204.53 -0.05 268.55 -0.05 396.55 110.8 460.51 110.8 588.5 221.65 652.5 332.5 588.5 443.35 652.5 554.2 588.5 554.2 460.52 665.05 396.55 665.05 268.55 554.2 204.53';
const hexSizeFiveSVGPoints = '997.68 682.25 1108.5 618.25 1108.5 490.25 997.68 426.25 997.65 298.25 886.85 234.25 886.8 106.25 775.95 42.25 665.1 106.25 554.25 42.25 443.4 106.25 332.55 42.25 221.7 106.25 221.7 234.25 110.85 298.25 110.85 426.25 -0.01 490.25 -0.01 618.25 110.85 682.25 110.85 810.25 221.7 874.25 221.7 1002.25 332.55 1066.25 443.4 1002.25 554.25 1066.25 665.1 1002.25 775.95 1066.25 886.8 1002.25 886.83 874.25 997.65 810.25 997.68 682.25'

export const TILES: GridTile[] = [
    
    {
        index: 0,
        x: -1,
        y: 3,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Resume.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 3.svg",
        mainPath: "../assets/hex/Main Hexes/Hex_Resume Main.png",
        title: "Resume",
        description: "View my resume.",
        targetURL: "resume",
        hovering: false
    }
    // ,{
    //     index: 1,
    //     x: 2, 
    //     y: 1.5, 
    //     size: 1, 
    //     svgPoints: hexSizeOneSVGPoints, 
    //     imagePath: "/assets/hex/Base Hexes/Hex_Green Hex.svg",
    //     hoverPath: "/assets/hex/Base Hexes/Hex_Green Filled Hex.svg", 
    //     mainPath: "/assets/hex/Main Hexes/Hex_Resume Main.png",
    //     title: "test", 
    //     description: "this is a test!", 
    //     hovering: false
    // }
    
]