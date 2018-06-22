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
  background(255, 204, 100); // try changing this to a blue background
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(55, 55, 55, 55);
  fill(200,100,100);
  arc(50, 50, 80, 80, 1, PI + QUARTER_PI, CHORD);
  fill(200,200,100);
  triangle(100,100,150,400,200,140)
  fill(20,60,100);
ellipse(100,100,40,40);// Draw a 30x20 pixel rectangle at coordinate (55,55)
}
