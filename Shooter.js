class Shooter 
{
   constructor(x,y)
   {
      var options = {density:1}
      this.body = Bodies.circle(x,y,20,options)
      World.add(myworld,this.body)
      this.radius = 20
   }
   display()
   {
   //  this.body.position.x=mouseX;
   //  this.body.position.y=mouseY;
   //  var pos = this.body.position;
   //  var angle = this.body.angle;
   //  push()
   // translate(pos.x,pos.y)
   // rotate(angle)
   fill("green")
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
   //  pop()
   }

}