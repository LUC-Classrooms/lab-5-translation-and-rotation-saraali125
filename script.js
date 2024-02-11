/*
LAB 5 - Translation and Rotation

Move the origin point with translate() so the image appears in the center of the canvas. Then, add a conditional statement that controls the canvas rotation.

*/
var a = 0
function setup() {
  createCanvas(400, 300);
  console.log("Lab 5 - Translation and Rotation");
}

function draw() {
  background(100);
  
  push(); // create a new temporary drawing layer
  ellipse(width/2, height/2, 100)
  pop();
  push();
  translate(mouseX, mouseY); // change these arguments
  
  //add an if() statement here
  if (mouseIsPressed){
    a = a + .1;
  } else {
    a = 0;
  }
  rotate(a);
  line(0, -50, 40, -20);
  line(0, -50, -40, -20);
  fill(255);
  ellipse(0, 0, 55);
  ellipse(0, -35, 40);
  ellipse(0, -60, 30);
  fill(0);
  rectMode(CENTER);
  rect(0, -82, 20, 20);
  line(-20, -72, 20, -72);
  ellipse(-7, -65, 5);
  ellipse(7, -65, 5);
  ellipse(0, -60, 5);
  ellipse(0, -40, 5);
  ellipse(0, -30, 5);
  ellipse(0, -20, 5);
  
  pop(); // dispose of the drawing layer
}

