const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var killthemonster1, monster1;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var block12, block13, block14, block15, block16, block17, block18, block19, block20, block21;
var block22, block23, block24, block25, block27
var platform, stringthing
var bgimage, killthemonsterimage, monster1image

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  platform = new Ground(500,500,1000,10)
  killthemonster1 = new killthemonster(100,100,100)
  block1 = new Block(300,480,30,30)
  block2 = new Block(300,465,30,30)
  block3 = new Block(300,450,30,30)
  block4 = new Block(300,435,30,30)
  block5 = new Block(300,420,30,30)
  block6 = new Block(300,405,30,30)
  block7 = new Block(300,390,30,30)
  block8 = new Block(400,480,30,30)
  block9 = new Block(400,465,30,30)
  block10 = new Block(400,450,30,30)
  block11 = new Block(400,435,30,30)
  block12 = new Block(400,420,30,30)
  block13 = new Block(400,405,30,30)
  block14 = new Block(400,390,30,30)
  block15 = new Block(400,375,30,30)
  block16 = new Block(400,360,30,30)
  block17 = new Block(400,345,30,30)
  block18 = new Block(400,330,30,30)
  block19 = new Block(400,315,30,30)
  block20 = new Block(500,450,30,30)
  block21 = new Block(500,480,30,30)
  block22 = new Block(500,465,30,30)
  block23 = new Block(500,435,30,30)
  block24 = new Block(500,420,30,30)
  block25 = new Block(600,480,30,30)
  block26 = new Block(600,465,30,30)
  block27 = new Block(600,450,30,30)
  block28 = new Block(600,435,30,30)
  block29 = new Block(600,420,30,30)
  block30 = new Block(600,405,30,30)
  block31 = new Block(600,390,30,30)
  stringthing = new String(killthemonster1.body,{x:100, y:100})
  // create sprites here

}

function draw() {
  Engine.run(engine)
  background(0);
  platform.display()
  killthemonster1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  
  stringthing.display()

}

function mouseDragged(){
   Matter.Body.setPosition(killthemonster1.body, {x, mouseX, y, mouseY});
}

