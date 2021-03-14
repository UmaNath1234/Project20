var cat, catImg, catSitting, catResting
var mouse, mouseImg, mouseGift, mouseDetective;
var gardenImg;

function preload() {
    //load the images here
    catImg = loadAnimation("cat2.png","cat3.png");
    mouseImg=loadAnimation("mouse2.png","mouse3.png");
    catSitting=loadImage("cat1.png");
    mouseGift=loadImage("mouse1.png");
    catResting=loadImage("cat4.png");
    mouseDetective=loadImage("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
  
    mouse = createSprite(120, 650, 750, 300);
    mouse.addImage(mouseGift);
    mouse.scale = 0.15;
  
    cat = createSprite(780, 650, 750, 300);
    cat.addImage(catSitting);
    cat.scale = 0.15;
    
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRun", catImg);
      cat.changeAnimation("catRun");
    }

    drawSprites();
}
