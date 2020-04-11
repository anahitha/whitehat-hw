var pointer

function setup() {
  createCanvas(800,400);
  pointer = createSprite(400, 200, 50, 20);
  pointer.shapeColor = "white"
}

function draw() {
  background("black", 255,255,255);  
  pointer.x = World.mouseX 
  pointer.y = World.mouseY
  
  if (pointer.x >= 700 && pointer.x < 800) {
    background ("violet");
  }

  if (pointer.x >= 600 && pointer.x < 700) {
    background ("indigo");
  }

  if (pointer.x >= 500 && pointer.x < 600){
    background ("blue")
  }

  if (pointer.x >= 400 && pointer.x < 500) {
    background ("turquoise");
  }

  if (pointer.x >= 300 && pointer.x < 400) {
    background ("green");
  }

  if (pointer.x >= 200 && pointer.x < 300) {
    background ("yellow");
  }

  if (pointer.x >= 100 && pointer.x < 200) {
    background ("orange");
  }

  if (pointer.x >= 0 && pointer.x < 100) {
    background ("red");
  }

  drawSprites();
}