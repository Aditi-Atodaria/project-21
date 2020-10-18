var bullet,wall;
var speed,weight,thickness;

function preload(){
  bulletImage = loadImage("bullet.png")
}

function setup() {
  createCanvas(1700,400);
  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(22,83);
  
   wall = createSprite(1500,200,thickness,height/2);
   wall.shapeColor = "white";
  
     bullet = createSprite(50, 200, 50, 5);
     //bullet.addImage("white",bulletImage);
     //bullet.scale = 0.1;
     //bullet.debug = true;
     bullet.shapeColor = "white";
  
}

function draw() {
   background("black");  
 bullet.velocityX = speed;
   
   if (hascollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed/(thickness*thickness*thickness);
    console.log(damage);
   if (damage > 10){
     wall.shapeColor = "red";
   } 
   
   if (damage < 10){
     wall.shapeColor = "green"
   }
  
}
   
   
   
  drawSprites();
  

  
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

