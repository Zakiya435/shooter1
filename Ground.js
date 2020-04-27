class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.x = 0;
    this.y = 480;
    this.width = 600;
    this.height = 20;
  };

  display()
  {
    fill("brown");
    rect(this.x,this.y,this.width,this.height);
  }
}
