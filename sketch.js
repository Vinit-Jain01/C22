var a,b,c,d,e;

function setup() {
  createCanvas(1200,800);
  a = createSprite(1200, 200, 50, 50);
  b = createSprite(100, 200, 80, 400);
  a.shapeColor = "blue"
  b.shapeColor = "yellow"
  c.shapeColor = "red"
  d.shapeColor = "green"
  
  
}

function draw() {
 background(0);  
 



  drawSprites();
}
