const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1519,1000);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  box = new Box(780,1000,100,300);
  drawSprites();
}