var fixedRect, movingRect
function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 100);
  fixedRect.shapeColor = "pink"
  fixedRect.velocityY = 5
  movingRect = createSprite(400, 700, 100, 50);
  movingRect.shapeColor = "pink"
  movingRect.velocityY = -5
}

function draw() {
  background(0); 
  

  if(fixedRect.width/2 + movingRect. width/2 > movingRect.x - fixedRect.x &&
    fixedRect.width/2 + movingRect. width/2 > fixedRect.x - movingRect.x && 
    fixedRect.height/2 + movingRect. height/2 > movingRect.y - fixedRect.y &&
    fixedRect.height/2 + movingRect. height/2 > fixedRect.y - movingRect.y
    ){
      fixedRect.velocityY = fixedRect.velocityY*(-1)
      movingRect.velocityY = movingRect.velocityY*(-1)
  }
  drawSprites();
  
}