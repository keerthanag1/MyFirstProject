var ball
function setup() {
  createCanvas(windowWidth, windowHeight);
 ball = createSprite(200, 200, 20, 20);
}

function draw() 
{
  background(30);
  if(keyDown("up")){
    ball.velocityY = -4;
  }

drawSprites()
}




