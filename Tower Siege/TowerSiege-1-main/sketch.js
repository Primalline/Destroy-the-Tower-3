const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var polygon, polygonImage;

var score = 0;

function preload(){
    polygonImage = loadImage("rock.jpg");
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;

  polygon = createSprite(100, 400, 20, 20);
  polygon.shapeColor = "Red";

  stand1 = new Stand(800,150,180,20);
  stand2 = new Stand(540,400,270,20);

  block1 = new Block(420,370,30,40);
  block2 = new Block(450,370,30,40);
  block3 = new Block(480,370,30,40);
  block4 = new Block(510,370,30,40);
  block5 = new Block(540,370,30,40);
  block6 = new Block(570,370,30,40);
  block7 = new Block(600,370,30,40);
  block8 = new Block(630,370,30,40);
  block9 = new Block(660,370,30,40);
  block10 = new Block(450,330,30,40);
  block11 = new Block(480,330,30,40);
  block12 = new Block(510,330,30,40);
  block13 = new Block(540,330,30,40);
  block14 = new Block(570,330,30,40);
  block15 = new Block(600,330,30,40);
  block16 = new Block(630,330,30,40);
  block17 = new Block(480,290,30,40);
  block18 = new Block(510,290,30,40);
  block19 = new Block(540,290,30,40);
  block20 = new Block(570,290,30,40);
  block21 = new Block(600,290,30,40);
  block22 = new Block(510,250,30,40);
  block23 = new Block(540,250,30,40);
  block24 = new Block(570,250,30,40);


  block25 = new Block(725,120,30,40);
  block26 = new Block(755,120,30,40);
  block27 = new Block(785,120,30,40);
  block28 = new Block(815,120,30,40);
  block29 = new Block(845,120,30,40);
  block30 = new Block(875,120,30,40);
  block31 = new Block(755,80,30,40);
  block32 = new Block(785,80,30,40);
  block33 = new Block(815,80,30,40);
  block34 = new Block(845,80,30,40);
  block35 = new Block(785,40,30,40);
  block36 = new Block(815,40,30,40);

  //polygon = new Block(10, 50, 20, 20);
  polygon = Bodies.circle(200, 400, 30);
  World.add(world, polygon);


  Slingshot = new SlingShot(this.polygon, {x:200, y:400});
}
 


function draw() {
  background("red");
 
  Engine.update(engine);

  textSize(30);
  stroke("Black");
  fill("black");
  text("SCORE - " + score, 50, 100);

  stand1.display();
  stand2.display();

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
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 50, 50);
  //polygon.display();;
  Slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 8){
        Slingshot.attach(this.polygon);
    }
}