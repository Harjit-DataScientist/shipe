var sea,seaimage
var ship,shipimage
function preload(){
seaimage=loadImage("sea.png")
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(600,400);
  sea=createSprite(200,200)
  sea.addImage(seaimage)
  sea.velocityX =-2
  ship=createSprite(200,200)
  ship.addAnimation("ship",shipimage)
  ship.scale=0.4
}


function draw() {
  background("blue");
  if(sea.x <0){
    sea.x=sea.width/2
  }
    
    
 drawSprites()
}