var database;
var milk, milkImg;
var foodStock, foodS;
var dog, dogImg, happyDog;

function preload(){

  dogImg = loadImage("Dog (1).png");
  happyDog = loadImage("happydog (1).png");
  milkImg = loadImage("Milk.png");

}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(350,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  milk = createSprite(250,250,10,10);
  milk.addImage(milkImg);
  milk.scale = 0.07
}


function draw() { 
  if(hour >= 06 && hour <= 19){
    background(255,255,0);
}
else{
  background(32,178,170);
} 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  fill("magenta");
  strokeWeight(3);
  stroke(0,0,0);
  textSize(15);
  text("Press the Up Arrow Key to Feed the Dog Milk", 100, 25 );

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}