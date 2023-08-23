var canvas;
var score = 0;
var rocket, rocketImg;
var rockGroup, rockGroupImg;
var bullet, bulletImg;
var shootGroup, shootGroupImg;
var heading;

var life = 3;
var score = 0;
var gameState = 1;



function preload(){
  rocketImg = loadImage("./assets/Rocket.png");
  rockGroupImg = loadImage("./assets/Rock.png");
  shootGroupImg = loadImage("./assets/Shoot.png");
  bulletImg = loadImage("./assets/Shoot.png");
}


function setup() {
  canvas = createCanvas(800,800);
  background("#BDA297");
  // Create Rocket 
  rocket = createSprite(100, height/2, 50,50);
  rocket.addImage(rocketImg);
  rocket.scale=0.5;
  // Create Rock 
  rockGroup = createSprite(600, height/2, 50,50);
  rockGroup.addImage(rockGroupImg);
  rockGroup.scale=0.08;
  // Create Bullet 
  shootGroup = createSprite(100, height/3, 50,50);
  shootGroup.addImage(shootGroupImg);
  shootGroup.scale=0.08;
}


function draw() {
drawSprites();
}