let button_1, img_1;

function preload() {
  img_1 = loadImage('assets/IMG_4061.jpg');
}

function setup() {
  createCanvas(900, 1600);
  // img_1 = loadImage('IMG_4061.jpg');

  button_1 = createButton('load gallery');
  button_1.position(10,10);
  button_1.mousePressed(loadPic);
}

function loadPic() {
  image(img_1, 0, 0);
  // put drawing code here
}