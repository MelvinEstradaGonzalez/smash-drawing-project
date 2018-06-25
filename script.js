var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Melvin Estrada"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
    colorMode(HSB);
  // Example. You can remove when you're ready!
  background(200, 204, 100); // try changing this to a blue background
  fill(105,254,100);
  rect(0,400,800,200);
  fill(100,264,70);    // Always call fill() before the shape you want to fill in.
  rect(515, 390, 18, 21); 
  rect(510, 390, 18, 22);
  rect(475, 390, 18, 21);
  rect(465, 390, 18, 22);
    triangle(575,390,520,390, 505,375);
    ellipse(450,380,27,18);
    
  fill(100,264,70);
  arc(500, 390, 87, 78, PI,TWO_PI );
  fill(210,200,100);
  arc(200,400,130,100,0,PI);
  fill(50,104,100);
ellipse(10,20,60,60);// Draw a 30x20 pixel rectangle at coordinate (55,55)
}
