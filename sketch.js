
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gameState = "play"
var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
monkey=createSprite(70,230,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.18
  ground=createSprite(600,290,1200,20)
  ground.velocityX=-1;
  sg=createGroup()
  bg=createGroup()
  
}

function draw() {
background("white");
  if(gameState==="play"){
     if(keyDown("space")){
     monkey.velocityY=-10 
     }
    monkey.velocityY=monkey.velocityY+1
  banana();
  stone();
    if(monkey.isTouching(bg)){
      score=score+10;
      bg.destroyEach();
    }
    text("Score: "+score,50,50)
    if(monkey.isTouching(sg)){
       gameState="end"

       }
    if(ground.x<0){
       ground.x=600
       }
     }
  
  else if(gameState==="end"){
    background("yellow");
    textSize(20) 
    fill("black")
    text("GAME OVER", 280,150)
      monkey.destroy();
    sg.destroyEach();
    bg.destroyEach();
    ground.destroy();
     }
  monkey.collide(ground)

  drawSprites();
}


function banana(){
  if(frameCount%100===0){
    b=createSprite(600,random(50,200))
  b.addImage(bananaImage)
  b.scale=0.1;
  b.velocityX=-5
  b.lifetime=120;
  bg.add(b)
  }
}
function stone(){
  if(frameCount%200===0){
    s=createSprite(600, 260)
  s.addImage(obstaceImage)
  s.scale=0.2;
  s.velocityX=-5
  s.lifetime=120;
  sg.add(s)
  }
}