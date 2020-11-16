var mybar1,mybar2,mybar3;
var paperous;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){                 

	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	mybar2=new bar(230,600,20,100);
	mybar3=new bar(370,640,290,20);
	mybar1=new bar(510,600,20,100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")



	Engine.run(engine);
  
}


function draw() {
   Engine.update(engine);
  rectMode(CENTER);
  background("black");
  bar1.display();
  bar2.display();
  bar3.display();
  paper.display();
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW);
	Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85})
}




