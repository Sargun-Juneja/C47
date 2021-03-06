var shooter;
var shooterImage;
var shooterAnimation;
var bulletImage;
var bulletGroup;
var enemy;
var enemyImage;
var enemyBulletImage;
var enemyChopperImage;
var chopperBulletImage;
var invisibleWall;
var rocket;
var rocketImage;
var shooterUpImage;

function preload() {
  //shooterAnimation = loadAnimation("soldier1.png","soldier2.png","soldier3.png","soldier4.png","soldier5.png","soldier6.png")
  bulletImage = loadImage("bullet.png")
  enemyImage = loadImage("enemy.png")
  enemyBulletImage = loadImage("enemyBullet.png")
  chopperImage = loadImage("chopper.png")
  chopperBulletImage = loadImage("choppeerBullet.png")
  rocketImage = loadImage("rocket.png")
  shooterUpImage = loadImage("soldierUp.png")
  shooterImage = loadImage("soldier1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter = createSprite(600, 500, 50, 50);
  shooter.addImage(shooterImage)
  shooter.scale = 0.5;
  //enemyGroup = new Group;
  //ChopperGroup = new Group;
  //enemy = createSprite(1500,500,50,50);
  //enemy.addImage(enemyImage)
  //enemy.scale = 0.2;
  //enemy.velocityX = -5
  //enemy.collide(invisibleWall);
  enemyChopper = createSprite(1500,100,50,50);
  //enemyChopper.addImage(chopperImage)
  enemyChopper.scale = 1.5;
  enemyChopper.velocityX = -5
  invisibleWall = createSprite(1000,600,1,1200);
  //invisibleWall.visible = false;
   enemy.bounceOff(invisibleWall);
   enemyChopper.collide(invisibleWall);
  // enemy.debug = true;
   //enemyChopper.debug = true;
}

function draw() {
  background(0,0,0);  

  if(keyDown("space")) {
    spawnBullets();
    shooter.addImage(shooterImage);
  }

  //spawnEnemies();
  
  if(keyDown("up")) {
    shooter.y = shooter.y-5
  }

  if(keyDown("down")) {
    shooter.y = shooter.y+5
  }

  if(keyDown("right")) {
    shooter.x = shooter.x+5
    //shooter.addAnimation(shooterAnimation);
  }

  if(keyDown("left")) {
    shooter.x = shooter.x-5
  }

  if(frameCount % 40 === 0) {
    spawnEnemyBullets();
  }

  if(frameCount % 60 === 0) {
    spawnChopperBullets();
  }

  if(keyDown("s")) {
    spawnRockets();
    shooter.addImage(shooterUpImage);
  }

  if(enemyChopper.isTouching(bulletGroup)) {
    enemyChopper.destroy();
  }

  drawSprites();
}

 function spawnBullets() {
   var bullet = createSprite(200,200,10,10);
   bullet.x = shooter.x+80;
   bullet.y = shooter.y-32;
   bullet.addImage(bulletImage);
   bullet.velocityX = 15;
   bullet.scale = 0.1;
   bulletGroup.add(bullet);
 }

 function spawnEnemies() {
  if(frameCount % 60 === 0) {
    var enemy = createSprite(1500,500,50,50)
    enemy.addImage("enemy",enemyImage);
    enemy.scale = 0.2;
    enemy.velocityX = -5;
   // enemyGroup.add(enemy);
  }
}

 function spawnEnemyBullets() {
  var enemyBullet = createSprite(200,200,10,10);
  enemyBullet.x = enemy.x-30;
  enemyBullet.y = enemy.y-50;
  enemyBullet.addImage(enemyBulletImage);
  enemyBullet.velocityX = -15;
  enemyBullet.scale = 0.1;
}

function spawnChopperBullets() {
  var chopperBullet = createSprite(500,100,10,10);
  chopperBullet.x = enemyChopper.x+40;
  chopperBullet.y = enemyChopper.y+50;
  chopperBullet.addImage(chopperBulletImage);
  chopperBullet.velocityX = -18;
  chopperBullet.velocityY = 15;
  chopperBullet.scale = 0.1;
}

  function spawnRockets() {
    var rocket = createSprite(200,200,10,10);
   rocket.x = shooter.x+80;
   rocket.y = shooter.y-32;
   rocket.addImage(rocketImage);
   rocket.velocityY = -15;
   rocket.velocityX = 15;
   rocket.scale = 0.05;
  }  

