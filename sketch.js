//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;

function preload()
{
  //load images here
  dogImg  = loadImage("images/dogImg.png");
  dogHappy  = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() { 

  background(46,139,87);

  fill(255,255,255);
  text("NOTE:PRESS UP_ARROW KEY TO FEED SPOT SOME MILK",80,50);



  if (keyWentDown(UP_ARROW))
  {
    writeStock(foodS)
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here
}

function readStock(data) 
{
  foodS = data.val();
}

function writeStock(x) 
{
  if (x <= 0)
  {
    x = 0
  }else{
    x = x-1
  }
  
 database.ref('/').update({
   Food:x 
 })  
}



