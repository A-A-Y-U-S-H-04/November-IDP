let colorlist = [90,200,55,14]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(colorlist));

}



let red = 0.0;
let green = 0.0;
let blue = 0.0;
let circleSize = 0.0;





function draw() {  
  stroke(0);
  fill(
    150 + sin(red) * 100,
    254 + cos(green) * 125,
    //chagge to change gradients for the green
    50 + tan(blue) * 200
  );

  //sin calculates the sine values
  
  let aliveCircleSize = 75 + sin(circleSize) * 50;
  ellipse(mouseY, mouseX, aliveCircleSize, mouseX)
  ;
  //if mouse moves to the positive x direction, the circles move to the negative y direction
  //if mouse moves to negative x direction, the circles move to the positive y direction
  //inverted mouseX and MouseY make the drawing goofy
  red = red + 0.3;
  //red
  green = green + 0.4;
  //green
  blue = blue + 0.6;
  //blue
  
  circleSize += 0.09;
  //circle size is continuously gougn to change; it will never be the same
}