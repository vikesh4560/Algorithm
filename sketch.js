var fixedRect, movingRect;
var game1,game2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  game1 = createSprite(100,100,50,50);
  game1.shapeColor="red";
  game2= createSprite(200,100,50,50);
  game2.shapeColor="blue";
  game1.velocityX=+4;
 
  game2.velocityX=+2;
  
}

function draw() {
  background(0,0,0);  

bounceOff(movingRect,fixedRect);
bounceOff(game1,game2); 
  drawSprites();
}
