class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
      
     }
     this.image = loadImage("assets/shooter.png");
     this.body = Bodies.rectangle(x,y,width,height,options)
     World.add(world, this.body);

    };
    

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        image(this.image, 20, 380,100,100);  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
    };
}
