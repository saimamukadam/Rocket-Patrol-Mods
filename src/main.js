/*
first and last name: Saima Mukadam
title: Rocket Patrol (Saima's Version)
approx time: 5 hrs
mods chosen:
    → (1 pts) Implement speed increase
    → (3 pts) Implement parallax scrolling for the background
    → (3 pts) Create a new title screen (typography, color, size, etc...)
citation:
    → commented code snippets are from stackoverflow for trying to implement a high score
    → https://www.joshmorony.com/how-to-create-a-parallax-background-in-phaser/ - parallax scrolling
note: this project is unfortunately incomplete as I was on a time crunch but i implemented as much as I could 
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
