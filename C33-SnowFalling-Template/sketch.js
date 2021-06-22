const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var background;
var snow = []


function preload(){
  //load background image (snow1.png)
  

  //load girlWalking animation
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 //create girl sprite and add animation and give it left velocity
 
 
 
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  //every 20 frames, create a new Snow object and push into the snow array
  //check plinko
  

  //run the for loop for the length of the snow array and display the snow object
  //check plinko
  

  
  drawSprites();
}