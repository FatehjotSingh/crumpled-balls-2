

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImage,dustbin
var paperImage

function preload(){
	dustbinImage=loadImage("Dustbin.png")
	paperImage=loadImage("Paper.png")
}
function setup() {
	createCanvas(1600, 750);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	dustbin=createSprite(width/2+55,550,10,10)
	dustbin.addImage(dustbinImage)
    dustbin.scale=1.75

	
   

	ground = new Ground();
	ball=new Ball(width/5.5,620)
	invisibleboxp1 = new BinPart(width/2+85,640,150,20);
	invisibleboxp2 = new BinPart(width/2+20,600,20,170);
	invisibleboxp3 = new BinPart(width/2+165,600,20,1800);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  
  
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:87,y:-87})
	}
}