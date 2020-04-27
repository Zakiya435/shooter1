var engine, world;
var tanker;
var ground;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
function setup() 
{
    createCanvas(600,500);
    engine = Engine.create();
    world = engine.world;
    tanker = new Tanker(20, 380,100,100);
    ground = new Ground();
}

function draw() 
{
   background(255)
   Matter.Engine.update(engine);
   tanker.display();
   ground.display();
}


function keyReleased() 
{
    // Call the shoot method for the cannon.
}