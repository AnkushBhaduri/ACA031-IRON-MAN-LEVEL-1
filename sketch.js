
var bg, backgroundImg,ground;
var ironman;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 ironmanImg= loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
 ironman=createSprite(200,585,20,50);
 ironman.scale=0.4;
 ironman.addImage(ironmanImg);
 ground=createSprite(200,585,400,10);
 ground.visible=false;

}

function draw() {
background(backgroundImg);

 if(keyDown("up")){
   ironman.velocityY= -10
 };
 if(keyDown("left")){
  ironman.velocityX= -8
};
if(keyDown("right")){
  ironman.velocityX= 8
}
if(keyDown("down")){
  ironman.velocityY= 10
}
ironman.velocityY+= 0.5;
ironman.collide(ground);
    
    drawSprites();
   
}