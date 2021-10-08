var count=0

function preload() {
  bg=loadImage("Mygameimages/manssionimage1.jpg")
  sasimg=loadImage("Mygameimages/SAS.png")
  df=loadImage("Mygameimages/deltaforceguy.png")
  bulletimg=loadImage("Mygameimages/bulletimg.png")
  bulletimg2=loadImage("Mygameimages/bulletimg2.png")
  bulletimg3=loadImage("Mygameimages/bulletimg3.png")
  bulletimg4=loadImage("Mygameimages/bulletimg4.png")
  bulletimg5=loadImage("Mygameimages/bullet5img.png")
  bulletSound=loadSound("Gunshot.mp3")
  bulletSound2=loadSound("Gunshot2.mp3")
  superbulletimg=loadImage("Mygameimages/superbulletimg.png")
  superbulletimg2=loadImage("Mygameimages/superbulletimg2.png")
  boomimg=loadImage("Mygameimages/boomimg.png")
  boomSound=loadSound("boom.mp3")
  superSound=loadSound("superSound.mp3")
}

function setup() {
  createCanvas(1500,720);

  sas=createSprite(200, 380, 50, 50);
  sas.addImage(sasimg)
  sas.scale = 0.4
  
  deltaforce=createSprite(1200, 400, 50, 50)
  deltaforce.addImage(df)
  deltaforce.scale = 0.3
  deltaforce.x = deltaforce.x + random(-6,6);
  


  superbullet=createSprite(100, 100, 60, 10);
  superbullet.addImage(superbulletimg)
  superbullet.visible=false

  superbullet2=createSprite(100, 100, 60, 10);
  superbullet2.addImage(superbulletimg2)
  superbullet2.visible=false

   sasGroup=new Group()
   sasGroup2=new Group()
   deltaGroup=new Group()
   deltaGroup2=new Group()
   deltaGroup.add(deltaforce);
   sasGroup.add(sas);

   boom=createSprite(700,300)
   boom.addImage(boomimg)
   boom.visible=false
}

function draw() {
  background(bg); 

  fill("white")
  textSize(18)
  text("Use the arrows to move the sas",40,100) 

  if(keyDown("LEFT_ARROW")){
    sas.x=sas.x-3
  }

  if(keyDown("RIGHT_ARROW")){
    sas.x=sas.x+3
  }

  if(keyDown("UP_ARROW")){
    sas.y=sas.y - 3
  }

  if(keyDown("DOWN_ARROW")){
    sas.y=sas.y+3
  }

fill("white")
  textSize(18)
  text("Press Space to make the SAS guy shoot",60,40)

  fill("white")
  textSize(18)
  text("Press 'Q' to make the delta guy shoot",850,40)
  

  if(keyDown("SPACE"))
  if(frameCount%50===0){
   createBulletsas();
   bulletSound2.play()
  }
  
  
  if(keyDown("Q")){
    if(frameCount%50===0){
    createBulletdelta();
    bulletSound.play()
    }
  }

  fill("white")
  textSize(18)
  text("Hold 'R' to make the delta guy shoot a different bullet",850,150)

  if(keyDown("R"))
  if(frameCount%100===0){
    createBulletdeltaTwo();
    bulletSound.play()
  }
  
 
  fill("white")
  textSize(18)
  text("Hold 'X' to make the sas shoot a different bullet",40,150)

  if(keyDown("X"))
  if(frameCount%100===0){
    createBulletsasTwo();
    bulletSound2.play()
  }



  fill("white")
  textSize(18)
  text("Hold 'G' to make the sas shoot a super bullet",450,150)

  if(keyDown("G"))
  if(frameCount%150===0){
    createBulletsasThree();
    superSound.play()
  }


  fill("white")
  textSize(18)
  text("Hold 'P' to make the delta shoot a super bullet",450,50)

  if(keyDown("P"))
  if(frameCount%150===0){
    createBulletdeltaThree();
    superSound.play()
  }
  
  fill("white")
  textSize(18)
  text("Use the arrows to move the deltaforce",850,100) 

  
  if(keyDown("A")){
     deltaforce.x=deltaforce.x  - 3
  }
   
  if(keyDown("D")){
    deltaforce.x=deltaforce.x + 3
  }

  if(keyDown("W")){
    deltaforce.y=deltaforce.y - 3
  }

  if(keyDown("S")){
    deltaforce.y=deltaforce.y + 3
  }

  

  if(sasGroup2.isTouching(deltaGroup)){
    deltaGroup.destroyEach()
    sasGroup2.destroyEach()
    boomSound.play() 
  }

  if(deltaGroup2.isTouching(sasGroup)){
    sasGroup.destroyEach();
    deltaGroup2.destroyEach();
    boomSound.play() 
  }
  fill("white")
  textSize(18)
  text("And here we win!!!",580,300)

  
 
   

  drawSprites();
}


function createBulletsas() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletimg);
  bullet.x =sas.x;
  bullet.y= sas.y;
  bullet.velocityX = +3;
  bullet.lifetime = 500;
  bullet.scale = 0.1; 
  sasGroup.add(bullet)
}

function createBulletdelta() {  
  var bullet2= createSprite(100, 100, 60, 10);
  bullet2.addImage(bulletimg2);
  bullet2.x =deltaforce.x;
  bullet2.y= deltaforce.y;
  bullet2.velocityX = -3;
  bullet2.lifetime = 500;
  bullet2.scale = 0.3; 
  deltaGroup.add(bullet2)
}

function createBulletdeltaTwo() {
  var bullet4= createSprite(100, 100, 60, 10);
  bullet4.addImage(bulletimg4);
  bullet4.x = deltaforce.x;
  bullet4.y= deltaforce.y;
  bullet4.velocityX = -3;
  bullet4.lifetime = 500;
  bullet4.scale = 0.1; 
  deltaGroup.add(bullet4)
}

function createBulletsasTwo() {
  var bullet5= createSprite(100, 100, 60, 10);
  bullet5.addImage(bulletimg5);
  bullet5.x = sas.x;
  bullet5.y= sas.y;
  bullet5.velocityX = +3;
  bullet5.lifetime = 500;
  bullet5.scale = 0.1; 
  sasGroup.add(bullet5)
}



function createBulletdeltaThree() {
  var superbullet2= createSprite(100, 100, 60, 10);
superbullet2.addImage(superbulletimg2);
  superbullet2.x = deltaforce.x;
  superbullet2.y= deltaforce.y;
  superbullet2.velocityX = -3;
  superbullet2.lifetime = 500;
  superbullet2.scale = 0.1;
  deltaGroup2.add(superbullet2) 
  
}


function createBulletsasThree() {
  var superbullet= createSprite(100, 100, 60, 10);
superbullet.addImage(superbulletimg);
  superbullet.x = sas.x;
  superbullet.y= sas.y;
  superbullet.velocityX = +3;
  superbullet.lifetime = 500;
  superbullet.scale = 0.1;
  sasGroup2.add(superbullet) 
  
}









