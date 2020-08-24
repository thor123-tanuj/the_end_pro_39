var ground,invisibleGround, groundImage
var monkey_running, monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7, monkey8, monkey9, monkey10
var obstaclesGroup, obstaclesImage,obstacles2Group, obstacles2Image
var bananaGroup, bananaImage
var count
var gameState = play;
var play = 1;
var end = 0;

function preload(){
  groundImage=loadImage("jungle2.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("Banana.png");
  obstaclesImage = loadImage("stone.png"); 
  obstacles2Image = loadImage("stone.png")
}

function setup() {
  createCanvas(800,400);
  
  ground=createSprite(0,0,800,400);
  ground.addImage(groundImage);
  ground.width=1000;
  ground.height=400;
    ground.x = ground.width /2;
  ground.velocityX = -2;

  invisibleGround = createSprite(200,225,400,10);
  invisibleGround.visible = false;
  
  monkey = createSprite(100,220,20,50);
  monkey.addAnimation("Monkey_01.png",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup = new Group();
  obstaclesGroup= new Group();
  obstacles2Group= new Group();
  
  count=0;
  
  
}

function draw() {
  
  background(255);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
                                                    
  if(keyDown("space") ) {
   
    monkey.velocityY = -10;
         
      camera.position.x = 325;
      camera.position.y = monkey.y;

  }
  
  var count = count + Math.round(getFrameRate()/60);
  stroke("black");
  textSize(100);
  fill("black");
  text("Survival Time: "+ count, 400, 725 );
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);

  var x = 0;
  var y = 0;
 
  
  spawnBanana();
  spawnStones();
  spawnStones2();
  
  if (monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    switch(count){
      case 10: monkey.scale=0.3;
                break;
        case 20:monkey.scale=0.4;
                break;       
}
  }
  
if (monkey.isTouching(obstaclesGroup)) {
     monkey.destroy();

   }
  if (monkey.isTouching(obstacles2Group)) {
     monkey.scale=0.1

   }
  
  drawSprites();
  
  if(monkey.isTouching(obstacles2Group)) {
    gameState = 'end';
  }

}



function spawnBanana() {
  if (frameCount%80==0) {
   var banana = createSprite(305,120,10,10);
   banana.y=Math.round(random(80,120));
    banana.addImage(bananaImage);
   banana.scale=0.04;
   banana.velocityX=-2;
   bananaGroup.add(banana);
   banana.lifetime=200;
  
  }
  
}
function spawnStones() {
  if (frameCount%300==0) {
var stone = createSprite(375,200);
stone.addImage(obstaclesImage);
stone.scale=0.1;
stone.velocityX=-4.5 ;
obstaclesGroup.add(stone);
stone.lifetime=200;
  }
  
}
  function spawnStones2() {
  if (frameCount%150==0) {
var stone2 = createSprite(375,200);
stone2.addImage(obstaclesImage);
stone2.scale=0.1;
stone2.velocityX=-4.5 ;
obstacles2Group.add(stone2);
stone2.lifetime=200;
  }
  
}
  
