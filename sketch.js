var ball;
var groundObj;
var leftSide,RightSide


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);
	engine = Engine.create();
	world = engine.world;
var ball_options={
	restitution:0.8,
	

}
var ground_options={
	isStatic:true
	
}
ground=Bodies.rectangle(400,250,800,10,ground_options)
World.add(world,ground)

leftSide=Bodies.rectangle(500,200,10,100,ground_options)
World.add(world,leftSide)

RightSide=Bodies.rectangle(650,200,10,100,ground_options)
World.add(world,RightSide)
	

	

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	ellipseMode(RADIUS)
	rectMode(CENTER);
}


function draw() {
 
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,10)
  rect(ground.position.x,ground.position.y,800,10)
  rect(leftSide.position.x,leftSide.position.y,10,100)
  rect(RightSide.position.x,RightSide.position.y,10,100)
  
  
  
 
}



function keyPressed(){
	if(keyCode==UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}



