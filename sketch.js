
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinline1=createSprite(600,640,300,20);
  dustbinline2=createSprite(450,540,20,200);
  dustbinline3=createSprite(750,540,20,200);
  ball=createSprite(100,640,20,20);
  ball.shapeColor=color("red");
  line=createSprite(100,660,100000,10);
  line.shapeColor=color("blue");


  drawSprites();
 


function keyPressed(){
if (keycode===UP_ARROW)
    
     Matter.body.applyForce(paperObject.body,position,{x:800,y:540})


}


}


