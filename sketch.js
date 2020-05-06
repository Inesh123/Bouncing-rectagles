var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);

fixedRect=createSprite(200, 200, 100, 50);
movingRect=createSprite(400, 200, 50, 100);

fixedRect.shapeColor="chartreuse";
fixedRect.debug=true;
fixedRect.velocityX=5;

movingRect.shapeColor="cyan";
movingRect.debug=true;
movingRect.velocityX=-5;

}
 
function draw() {

  background(0);  

  if(fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
    && movingRect.x - fixedRect.x  < fixedRect.width / 2 + movingRect.width / 2){
      fixedRect.velocityX=fixedRect.velocityX *(-1);
      movingRect.velocityX=movingRect.velocityX *(-1);
    }
if(fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
    && movingRect.y - fixedRect.y  < fixedRect.height / 2 + movingRect.height / 2){
       fixedRect.velocityY=fixedRect.velocityY * (-1);
       movingRect.velocityY=movingRect.velocityY * (-1);
    }

    

  drawSprites();

}