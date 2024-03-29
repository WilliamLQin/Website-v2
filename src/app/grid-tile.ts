export class GridTile {
    index: number;
    column: number;
    row: number;
    size: number; // number of tiles horizontally
    svgPoints: string;
    imagePath: string;
    mainPath: string;
    title: string;
    description: string;
    tabTitle: string;
    targetURL: string;
    hovering: boolean;
}

const hexSizeOneSVGPoints = '128 0 17.15 64 17.15 192 128 256 238.85 192 238.85 64 128 0';
const hexSizeTwoSVGPoints = '445.65 256 334.85 192 334.85 64 224 0 113.15 64 113.15 192 2.3 256 2.3 384 113.15 448 224 384 334.85 448 445.7 384 445.65 256';
const hexSizeTwopFiveSVGPoints = '443.35 309.13 554.25 245.13 554.25 117.13 443.4 53.13 332.55 117.13 221.7 53.13 110.85 117.13 110.85 245.13 0 309.13 0 437.13 110.85 501.13 221.7 437.13 332.55 501.13 443.4 437.13 443.35 309.13';
const hexSizeTwopFiveFlippedSVGPoints = '110.9 309.13 0 245.13 0 117.13 110.85 53.13 221.7 117.13 332.55 53.13 443.4 117.13 443.4 245.13 554.25 309.13 554.25 437.13 443.4 501.13 332.55 437.13 221.7 501.13 110.85 437.13 110.9 309.13';
const hexSizeThreeSVGPoints = '554.2 204.53 554.2 76.5 443.35 12.5 332.5 76.5 221.65 12.5 110.8 76.5 110.8 204.53 -0.05 268.55 -0.05 396.55 110.8 460.51 110.8 588.5 221.65 652.5 332.5 588.5 443.35 652.5 554.2 588.5 554.2 460.52 665.05 396.55 665.05 268.55 554.2 204.53';
const hexSizeFiveSVGPoints = '997.68 682.25 1108.5 618.25 1108.5 490.25 997.68 426.25 997.65 298.25 886.85 234.25 886.8 106.25 775.95 42.25 665.1 106.25 554.25 42.25 443.4 106.25 332.55 42.25 221.7 106.25 221.7 234.25 110.85 298.25 110.85 426.25 -0.01 490.25 -0.01 618.25 110.85 682.25 110.85 810.25 221.7 874.25 221.7 1002.25 332.55 1066.25 443.4 1002.25 554.25 1066.25 665.1 1002.25 775.95 1066.25 886.8 1002.25 886.83 874.25 997.65 810.25 997.68 682.25'

export const TILES: GridTile[] = [
    
    // Cluster Professional
    {
        index: 0,
        column: -1,
        row: -6,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Email.svg",
        mainPath: "../assets/hex/Main Images/Main_Email-min.jpg",
        title: "<h1>Email</h1>",
        description: "Feel free to contact me.\nI look forward to\nhearing from you!",
        tabTitle: "",
        targetURL: "email",
        hovering: false
    },
    {
        index: 1,
        column: 0,
        row: -6,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_GitHub.svg",
        mainPath: "../assets/hex/Main Images/Main_GitHub-min.jpg",
        title: "<h1>GitHub</h1>",
        description: "Visit my GitHub to download my projects and see how they were created!",
        tabTitle: "",
        targetURL: "github",
        hovering: false
    },
    {
        index: 2,
        column: 0.5,
        row: -5,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_LinkedIn.svg",
        mainPath: "../assets/hex/Main Images/Main_LinkedIn-min.jpg",
        title: "<h1>LinkedIn</h1>",
        description: "Connect with me on LinkedIn!",
        tabTitle: "",
        targetURL: "linkedin",
        hovering: false
    },
    {
        index: 3,
        column: 1.5,
        row: -5,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Devpost.svg",
        mainPath: "../assets/hex/Main Images/Main_Devpost-min.jpg",
        title: "<h1>Devpost</h1>",
        description: "View my hackathon projects\non Devpost!",
        tabTitle: "",
        targetURL: "devpost",
        hovering: false
    },
    {
        index: 4,
        column: -1,
        row: -4,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Resume.svg",
        mainPath: "../assets/hex/Main Images/Main_Resume-min.jpg",
        title: "<h1>Resume</h1>",
        description: "<br>View my resume.",
        tabTitle: "",
        targetURL: "resume",
        hovering: false
    },
    {
        index: 5,
        column: 0.5,
        row: -3,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Lightboard.svg",
        mainPath: "../assets/hex/Main Images/Main_Lightboard-min.jpg",
        title: "<h1>Lightboard<br>Creator</h1>",
        description: "<br>One of the major projects I worked on at D&R Electronics!",
        tabTitle: "Lightboard Creator | ",
        targetURL: "lightboardcreator",
        hovering: false
    },

    // Cluster Community
    {
        index: 6,
        column: 1,
        row: 4,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Blog.svg",
        mainPath: "../assets/hex/Main Images/Main_Blog-min.jpg",
        title: "<h1>Blog</h1>",
        description: "Come visit my blog,\n'The Thinking Rock'!",
        tabTitle: "",
        targetURL: "blog",
        hovering: false
    },
    {
        index: 7,
        column: -1.25,
        row: 3.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Awards.svg",
        mainPath: "../assets/hex/Main Images/Main_Awards-min.jpg",
        title: "<h1>Awards</h1>",
        description: "View my awards, honours, and achievements.",
        tabTitle: "Awards | ",
        targetURL: "awards",
        hovering: false
    },
    {
        index: 8,
        column: -0.75,
        row: 5.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveFlippedSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Robotics.svg",
        mainPath: "../assets/hex/Main Images/Main_Robotics-min.jpg",
        title: "<h1>Robotics</h1>",
        description: "I program robots and create apps for my FRC team!",
        tabTitle: "Robotics | ",
        targetURL: "robotics",
        hovering: false
    },

    // Cluster Projects
    {
        index: 9,
        column: -3.5,
        row: 1,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_VisionMotion.svg",
        mainPath: "../assets/hex/Main Images/Main_VisionMotion-min.jpg",
        title: "<h1>Vision<br>Motion</h1>",
        description: "\nMotion sensor mobile app that uses the camera to track an object and create a graph.",
        tabTitle: "Vision Motion | ",
        targetURL: "visionmotion",
        hovering: false
    },
    {
        index: 10,
        column: -5.25,
        row: -0.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_CPR-VR.svg",
        mainPath: "../assets/hex/Main Images/Main_CPR-VR-min.jpg",
        title: "<h1>CPR-VR</h1>",
        description: "Virtual reality simulator for basic CPR!",
        tabTitle: "CPR-VR | ",
        targetURL: "cprvr",
        hovering: false
    },
    {
        index: 11,
        column: -3.25,
        row: -1.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveFlippedSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_ThinkTank.svg",
        mainPath: "../assets/hex/Main Images/Main_ThinkTank-min.jpg",
        title: "<h1>Think Tank</h1>",
        description: "\nControl a tank with your brain by using a Muse headband!",
        tabTitle: "Think Tank | ",
        targetURL: "thinktank",
        hovering: false
    },
    {
        index: 12,
        column: -5.5,
        row: 1.5,
        size: 1.75,
        svgPoints: hexSizeTwoSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Talk2Control.svg",
        mainPath: "../assets/hex/Main Images/Main_Talk2Control-min.jpg",
        title: "<h1>Talk2Control</h1>",
        description: "A web application that controls your screen using voice recognition!",
        tabTitle: "Talk2Control | ",
        targetURL: "talk2control",
        hovering: false
    },
    {
        index: 13,
        column: -4.5,
        row: 3,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_PopMIDI.svg",
        mainPath: "../assets/hex/Main Images/Main_PopMIDI-min.jpg",
        title: "<h1>Pop MIDI</h1>",
        description: "Pop can music box that can play any MIDI file!",
        tabTitle: "Pop MIDI | ",
        targetURL: "popmidi",
        hovering: false
    },


    // Cluster Games
    {
        index: 14,
        column: 3.5,
        row: -1,
        size: 3,
        svgPoints: hexSizeThreeSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Plant.svg",
        mainPath: "../assets/hex/Main Images/Main_Plant-min.jpg",
        title: "<h1>Plant</h1>",
        description: "Rapid tower defense game with freedom of placement and movement.\nCurrently in development!",
        tabTitle: "Plant | ",
        targetURL: "plant",
        hovering: false
    },
    {
        index: 15,
        column: 3.25,
        row: 1.5,
        size: 2.5,
        svgPoints: hexSizeTwopFiveFlippedSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Fihgt.svg",
        mainPath: "../assets/hex/Main Images/Main_Fihgt-min.jpg",
        title: "<h1>Fihgt</h1>",
        description: "A wacky and fun fighting game for two players!",
        tabTitle: "Fihgt | ",
        targetURL: "fihgt",
        hovering: false
    },
    {
        index: 16,
        column: 5,
        row: 0.5,
        size: 1.75,
        svgPoints: hexSizeTwoSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_SpaceJousting.svg",
        mainPath: "../assets/hex/Main Images/Main_SpaceJousting-min.jpg",
        title: "<h1>Space<br>Jousting</h1>",
        description: "\nStrike your opponent at their weak spot in this two-player game!",
        tabTitle: "Space Jousting | ",
        targetURL: "spacejousting",
        hovering: false
    },
    {
        index: 17,
        column: 5.5,
        row: -1,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_Stux.svg",
        mainPath: "../assets/hex/Main Images/Main_Stux-min.jpg",
        title: "<h1>Stux</h1>",
        description: "iOS block stacking and balancing game!",
        tabTitle: "Stux | ",
        targetURL: "stux",
        hovering: false
    },
    {
        index: 18,
        column: 6,
        row: 0,
        size: 1,
        svgPoints: hexSizeOneSVGPoints,
        imagePath: "../assets/hex/Icon Hexes/Hex_LaserField.svg",
        mainPath: "../assets/hex/Main Images/Main_LaserField-min.jpg",
        title: "<h2>Laser Field</h2>",
        description: "iOS laser bounding and survival game!",
        tabTitle: "Laser Field | ",
        targetURL: "laserfield",
        hovering: false
    }
    



    // {
    //     index: ,
    //     column: ,
    //     row: ,
    //     size: ,
    //     svgPoints: ,
    //     imagePath: "../assets/hex/Icon Hexes/Hex_.svg",
    //     mainPath: "../assets/hex/Main Images/Main_-min.jpg",
    //     title: ,
    //     description: ,
    //     tabTitle: "",
    //     targetURL: ,
    //     hovering: false
    // }
    
]