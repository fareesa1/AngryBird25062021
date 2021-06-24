const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,375,25,50);
    box2 = new Box(350,375,25,50);
    box3 = new Box(400,375,25,50);
// createing log - level one
log1 = new Log(350,345,125,20,0)

box4 = new Box(310,300,40,40);
box5 = new Box(390,300,40,40);
// box5 = new Box(400,375,25,50);
    ground = new Ground(400,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    log1.display()
}