const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;

var ground;
var superhero;
var bg;


function preload() {
//preload the images here
bg=loadImage("images/bg.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
engine=Engine.create();
world=engine.world;

ground= new Ground(477,425,1050,15);

  block1= new Block(580,250,50,50);
  block2= new Block(560,380,50,50);
  block3= new Block(610,380,50,50);
  block4= new Block(660,380,50,50);
  block5= new Block(710,380,50,50);
  block6= new Block(560,330,50,50);
  block7= new Block(610,330,50,50);
  block8= new Block(660,330,50,50);
  block9= new Block(710,330,50,50);
  block10= new Block(560,280,50,50);
  block11= new Block(610,280,50,50);
  block12= new Block(660,280,50,50);
  block13= new Block(630,230,50,50);
  block14= new Block(710,280,50,50);
  block15= new Block(685,200,50,50);
  block16= new Block(630,200,50,50);
 
superhero=new Superhero(295,290,450,150);

fly=new Throw(superhero.body,{x:250,y:205});

monster=new Monster(899,300,150,150);

}

function draw() {
  background(bg);
Engine.update(engine);

ground.display();
block1.display();
block2.display();
block3.display();

block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();

block14.display();
block15.display();
block16.display();

superhero.display();
monster.display()
}

function mouseDragged(){
Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});

}