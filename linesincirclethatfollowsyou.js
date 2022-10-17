let angle=45;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noCursor();
}

function draw() {
  translate (mouseX,mouseY);
  background(255);
  strokeWeight (1);
  

  rotate(angle);
  ellipse(0, 0, 50, 00);
  rotate(angle);
  ellipse(0, 0, 50, 00);  
  rotate(angle);
  ellipse(0, 0, 50, 00);
  rotate(angle);
  ellipse(0, 0, 50, 00);
  rotate(angle);
  ellipse(0, 0, 50, 00);
  rotate(angle);
  ellipse(0, 0, 50, 00);  
  rotate(angle);
  ellipse(0, 0, 50, 00);
  rotate(angle);
  ellipse(0, 0, 50, 00);
 
  
  angle +=0.1
}
