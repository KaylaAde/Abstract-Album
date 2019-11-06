let img; 
function preload() {
img = loadImage('tree.png');
  Xmas = loadFont('The Perfect Christmas.ttf');}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  print(mouseX,mouseY);
  background('pink');
 
  circle();
  ///snow
  var randomX = random(0,100);
  var randomY = random(0,100);
  loop();
  frameRate(1);
  fill('white');
  ellipse(randomX,randomY, 10,10);
  ellipse(randomX,350, 10,10);
  ellipse(235,randomY, 10,10);
  ellipse(randomX,200, 10,10);
  ellipse(randomX,346, 10,10);
  ellipse(318, randomY, 20,20);
  ellipse(randomX, 245, 10,10);
  ellipse(275, randomY, 10);
  //text
  


  //tree
  image(img, 100,100, 200,200);
  //ornaments 
  fill('gold')
  circle(171,202,20);
  fill('blue');
  circle(215,190, 30);
  fill('purple')
  circle(220,240, 23);
  circle(150,293, 30);
  fill('brown');
  rect(180,300,40,50);
  //words
  textSize(70);
text('Merry Christmas', 70, 50);
textFont(Xmas);
fill(0, 102, 153);
}