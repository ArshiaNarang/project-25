class Paper{
constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.paper = Bodies.circle(x,y,r,options)
    this.r = r
    World.add(world,this.paper) 
    this.image = loadImage("paper.png")
}
display(){
   var angle = this.paper.angle;
    push();
    translate(this.paper.position.x, this.paper.position.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image,0, 0,this.r,this.r);
    pop();
  }
}