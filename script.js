var Engine=Matter.Engine
var Body=Matter.Body
var Bodies=Matter.Bodies
var World=Matter.World

var man_behaviour 
var player1,engine,world,wall1,playbutton,bgimg,wall,forwardButton,backwardButton
var diamondimg
// diamonds,player,obstacles



function preload(){
    bgimg=loadImage("fighting_backround.jpg")
    diamondimg=loadImage("reward.png")

}

function setup(){
createCanvas(windowWidth,windowHeight)   
engine=Engine.create()
world=engine.world


playbutton=createButton("Play")
playbutton.position(230,100)

// forwardButton=createButton("Forward")
// forwardButton.position(230,100)


// backwardButton=createButton("Backward")
// backwardButton.position(230,150)
// playbutton.mousePressed(jump())

wall=new Ground(width/2,height-30,width,20)
player1=new Player(100,10,200,"red")
Engine.update(engine)
}

function draw(){
background(bgimg)
Engine.update(engine)

player1.show()
player1.move()
Appeardimaonds()
// forwardButton.mousePressed(forward)
// backwardButton.mousePressed(backward)

}

function jump(){
    player1.rise()

   
}


function Appeardimaonds(){
    randx=Math.round(random(15,width-20))
    randy=Math.round(random(15,height-100))

    if(frameCount%60==0)
    {
        diamond=createSprite(randx,randy)
        diamond.addImage("diamondimg")
    }
}

// function forward(){

//     if(keyDown("right_arrow")){
//         this.player1.x += 1
//         console.log("right")
//     }}

//     function backward(){
//     if(keyDown("left_arrow")){
//         this.player1.x -=1
//         console.log("left")

//     }
//}