  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

var rectangle1,rectangle2,rectangle3;
var Unirect;
var bob1,rope1,rope2,rope3;
var ground,demon;
var demon2 , demon3 , demon4;
var score=0;
function preload() {
 
}

function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  world = engine.world;

  rectangle1 =new Rectangle(425,411,20,230);
  rectangle2 =new Rectangle(480,400,230,20);
  rectangle3 =new Rectangle(590,459,20,140);
  Unirect =createSprite(595,390,5,65);

  bob1 = new Bob(250,50,20);
  rope1 = new Rope(bob1.body,{x:250, y:50});

  demon =new Demon(680,520,20,20);
  demon2 =new Demon(595,360,20,20);

  ground = createSprite(380,540,750,20);
  ground.shapeColor ="white";
}

function draw() {
  background("black"); 
  fill("white");
  text("Score:"+score,width-300,50);

   

  Engine.update(engine);
  drawSprites();

rectangle1.display();
rectangle2.display();
rectangle3.display();
bob1.display();
rope1.display();
demon.display();
demon2.display();
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
  //  }
}