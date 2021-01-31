var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
car=createSprite(200,200,50,50);
car.shapeColor="cyan";
wall=createSprite(1000,200,10,100);
car.velocityX=4;
wall.shapeColor="brown";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(Touching(car,wall)){
  text("touched",500,500);
  textSize(20);
  car.shapeColor="pink";
  wall.shapeColor="pink";}

  BounceOff(car,wall);
  drawSprites();
}
function Touching(a,b){
  if (a.x - b.x < a.width/2 + b.width/2
    && a.x - b.x < a.width/2 + b.width/2
   && a.y - b.y < a.height/2 + b.height/2
    && a.y - b.y < a.height/2 + b.height/2) {
  return true;
}
else {
  return false;
}
}
function BounceOff(Object1,Object2){ 
  if(Object1.x - Object2.x < Object2.width/2 + Object1.width/2 && Object2.x - Object1.x < Object2.width/2 + Object1.width/2)
   {
      Object1.velocityX = (-1)*Object1.velocityX; } 
      if(Object1.y - Object2.y < Object2.height/2 + Object1.height/2 && Object2.y - Object1.y < Object2.height/2 + Object1.height/2) 
   { 
     Object1.velocityY = (-1)*Object1.velocityY; } }