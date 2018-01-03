export class GridTile {
    index: number;
    column: number;
    row: number;
    size: number; // number of tiles horizontally
    svgPoints: string;
    imagePath: string;
    hoverPath: string;
    mainPath: string;
    title: string;
    description: string;
    tabTitle: string;
    targetURL: string;
    hovering: boolean;
}

const hexSizeOneSVGPoints = '128 0 17.15 64 17.15 192 128 256 238.85 192 238.85 64 128 0';
const hexSizeThreeSVGPoints = '554.2 204.53 554.2 76.5 443.35 12.5 332.5 76.5 221.65 12.5 110.8 76.5 110.8 204.53 -0.05 268.55 -0.05 396.55 110.8 460.51 110.8 588.5 221.65 652.5 332.5 588.5 443.35 652.5 554.2 588.5 554.2 460.52 665.05 396.55 665.05 268.55 554.2 204.53';
const hexSizeTwopFiveSVGPoints = '443.35 309.13 554.25 245.13 554.25 117.13 443.4 53.13 332.55 117.13 221.7 53.13 110.85 117.13 110.85 245.13 0 309.13 0 437.13 110.85 501.13 221.7 437.13 332.55 501.13 443.4 437.13 443.35 309.13';
const hexSizeFiveSVGPoints = '997.68 682.25 1108.5 618.25 1108.5 490.25 997.68 426.25 997.65 298.25 886.85 234.25 886.8 106.25 775.95 42.25 665.1 106.25 554.25 42.25 443.4 106.25 332.55 42.25 221.7 106.25 221.7 234.25 110.85 298.25 110.85 426.25 -0.01 490.25 -0.01 618.25 110.85 682.25 110.85 810.25 221.7 874.25 221.7 1002.25 332.55 1066.25 443.4 1002.25 554.25 1066.25 665.1 1002.25 775.95 1066.25 886.8 1002.25 886.83 874.25 997.65 810.25 997.68 682.25'

export const TILES: GridTile[] = [
    
    {
        index: 0,
        column: -1,
        row: 6,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Email.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 1.svg",
        mainPath: "../assets/hex/Main Images/Main_Email-min.jpg",
        title: "Email",
        description: "Feel free to contact me.\nI look forward to\nhearing from you!",
        tabTitle: "",
        targetURL: "email",
        hovering: false
    },
    {
        index: 1,
        column: 0,
        row: 6,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_GitHub.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 1.svg",
        mainPath: "../assets/hex/Main Images/Main_GitHub-min.jpg",
        title: "GitHub",
        description: "Visit my GitHub to download my projects and see how they were created!",
        tabTitle: "",
        targetURL: "github",
        hovering: false
    },
    {
        index: 2,
        column: 0.5,
        row: 5,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_LinkedIn.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 1.svg",
        mainPath: "../assets/hex/Main Images/Main_LinkedIn-min.jpg",
        title: "LinkedIn",
        description: "Connect with me on LinkedIn!",
        tabTitle: "",
        targetURL: "linkedin",
        hovering: false
    },
    {
        index: 3,
        column: 1.5,
        row: 5,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Devpost.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 1.svg",
        mainPath: "../assets/hex/Main Images/Main_Devpost-min.jpg",
        title: "Devpost",
        description: "View my hackathon projects on Devpost!",
        tabTitle: "",
        targetURL: "devpost",
        hovering: false
    },
    {
        index: 4,
        column: -1,
        row: 4,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Resume.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 3.svg",
        mainPath: "../assets/hex/Main Images/Main_Resume-min.jpg",
        title: "Resume",
        description: "View my resume.",
        tabTitle: "",
        targetURL: "resume",
        hovering: false
    },
    {
        index: 5,
        column: 1,
        row: -4,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Blog.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 3.svg",
        mainPath: "../assets/hex/Main Images/Main_Blog-min.jpg",
        title: "Blog",
        description: "Come visit my blog,\n'The Thinking Rock'!",
        tabTitle: "",
        targetURL: "blog",
        hovering: false
    },
    {
        index: 6,
        column: -0.75,
        row: -5.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Awards.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 2,5.svg",
        mainPath: "../assets/hex/Main Images/Main_Awards-min.jpg",
        title: "Awards",
        description: "View my awards, honours, and achievements.",
        tabTitle: " | Awards",
        targetURL: "awards",
        hovering: false
    },

    {
        index: 7,
        column: 3.5,
        row: -1,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Plant.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 3.svg",
        mainPath: "../assets/hex/Main Images/Main_Plant-min.jpg",
        title: "Plant",
        description: "Rapid tower defense game with freedom of placement and movement.\nCurrently in development!",
        tabTitle: " | Plant",
        targetURL: "plant",
        hovering: false
    },
    {
        index: 8,
        column: -3,
        row: -2,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_VisionMotion.svg",
        hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size 3.svg",
        mainPath: "../assets/hex/Main Images/Main_VisionMotion-min.jpg",
        title: "Vision Motion",
        description: "Motion sensor mobile app that uses the camera to track an object and create a graph.",
        tabTitle: " | Vision Motion",
        targetURL: "visionmotion",
        hovering: false
    }



    // {
    //     index: ,
    //     column: ,
    //     row: ,
    //     size: ,
    //     svgPoints: ,
    //     imagePath: "../assets/hex/Icon Hexes/Hex_.svg",
    //     hoverPath: "../assets/hex/Overlay Hexes/Hex_Overlay Hex Size .svg",
    //     mainPath: "../assets/hex/Main Images/Main_-min.jpg",
    //     title: ,
    //     description: ,
    //     tabTitle: "",
    //     targetURL: ,
    //     hovering: false
    // }
    
]