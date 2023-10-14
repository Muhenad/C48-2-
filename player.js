class Player{
constructor(x,y,health,color){


var man_behaviour={
    'resitution':1,
    'friction':0.3,
        'density':1.0
  
}


this.man=Bodies.circle(x,y,50,man_behaviour)
Matter.World.add(world,this.man)


this.x=x
this.y=y
this.color=color
// this.img=img
this.health=health

}

show(){
    var angle=this.man.angle
    push()
    ellipseMode(CENTER)
    fill(this.color)
    ellipse(this.man.position.x,this.man.position.y,50,50)

    pop()
}


move(){

    if(keyDown("right_arrow")){
        this.man.position.x += 1
        console.log("right")
    }
    if(keyDown("left_arrow")){
        this.man.position.x -=1
        console.log("left")

    }
}



// rise(){

//     var newAngle = man.angle - 28;
//     newAngle = newAngle *(3.14/180)
//     var velocity = p5.Vector.fromAngle(newAngle);
//     velocity.mult(0.5);
//     Matter.Body.setStatic(this.man, false);
//     Matter.Body.setVelocity(this.man, {
//       x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});  
//   }
}


