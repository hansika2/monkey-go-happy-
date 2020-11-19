var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  //to create sprite for monkey.
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX=-4; 
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  background("mediumSpringGreen");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);

  Banana();
  Obstacles();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score, 500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
ground.velocityX = 0;
monkey.velocityY = 0;
obstaclesGroup.setVelocityXEach(0);
bananaGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1);
bananaGroup.setLifetimeEach(-1);


}
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50);
}

function Banana(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,180))
    banana.velocityX=-2;
    banana.lifetime=-2;
    banana.scale=0.1;
    
   bananaGroup.add(banana);
  }
}

 function Obstacles(){
   if(World.frameCount%300===0){
   obstacles=createSprite(250,328,20,20);
   obstacles.addImage(obstacleImage);
   obstacles.velocityX=-5;
   obstacles.lifetime=-1;
   obstacles.scale=0.1;
     
     obstaclesGroup.add(obstacles);
   }
 }






