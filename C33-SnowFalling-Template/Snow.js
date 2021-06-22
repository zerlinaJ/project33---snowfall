class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.2,
            'frictionAir':0.1,
            'density':0.2
            
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 35,35);
        pop();
      }
}