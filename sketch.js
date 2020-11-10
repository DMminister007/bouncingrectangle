var object1,object2;

function setup() {
  var canvas = createCanvas(1200,800);
  object2 = createSprite(400,100,80,80); 
  object2.shapeColor = "green"; 
  object2.debug = true;
  object2.velocityY=5;
  object1 = createSprite(400,700,80,80); 
  object1.shapeColor = "green"; 
  object1.debug = true;
  object1.velocityY=-5;
}

function draw() {
  background("black"); 
  

  bounceOff(object1,object2);

 /* if(isTouching(object1, object2)){
    fixed.shapeColor = "red";
    moving.shapeColor = "red"; 
  }
  else{
    fixed.shapeColor = "green"; 
    moving.shapeColor = "green"; 

  }*/
  drawSprites();
}


/*function isTouching(moving,fixed){

  if(moving.x-fixed.x < moving.width/2 + fixed.width/2
    && fixed.x-moving.x < moving.width/2 + fixed.width/2  
    && moving.y-fixed.y < moving.height/2 + fixed.height/2
    && fixed.y-moving.y < moving.height/2 + fixed.height/2 ){ 
    return true; 
  }
  else{ 
    return false;
  } 

}*/

function bounceOff(moving,fixed){
  if(moving.x-fixed.x < moving.width/2 + fixed.width/2
    && fixed.x-moving.x < moving.width/2 + fixed.width/2  ){

      fixed.velocityX=fixed.velocityX*(-1);
      moving.velocityX=moving.velocityX*(-1);

    }

  if(moving.y-fixed.y< moving.height/2 + fixed.height/2
    && fixed.y-moving.y < moving.height/2 + fixed.height/2  ){

      fixed.velocityY=fixed.velocityY*(-1);
      moving.velocityY=moving.velocityY*(-1);
  
      }

}