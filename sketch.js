
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;

var engine,world;
var paper,d1,d2,d3,ground;

function setup() {
	createCanvas(1600,700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	paper=new Paper(100, 360, 25);
	
	ground=new Ground(800, 690, 1600, 30);
	
	
	d1=new Dustbin(1300,665,170,20);  
	d2=new Dustbin(1205,615,20,120);
	d3=new Dustbin(1395,615,20,120);

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  paper.display();
  d1.display();
  d3.display();
  d2.display();
  ground.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}



