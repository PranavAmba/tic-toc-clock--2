var hr = hour();
var min = minute();
var sec = second();


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  secAngle = map(sec, 0, 50, 0 ,180)  
  minAngle = map(min, 0, 100, 0 ,200)  
  hrAngle = map(hr, 0, 100, 0 ,220)  

}

//INCOMPLETE

function draw() {
  background(0,0,0);
  
  //sec hand
  push()
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(100,100,100,200)
  pop()
  drawSprites();

  //min hand
  push()
  rotate(minAngle)
  stroke(255,10,255)
  strokeWeight(7)
  line(200,100,100,200)
  pop()
  drawSprites();

  //hr hand
  push()
  rotate(hrAngle)
  stroke(255,100,255)
  strokeWeight(7)
  line(300,100,100,200)
  pop()
  drawSprites();
}