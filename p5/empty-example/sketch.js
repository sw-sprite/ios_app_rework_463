let button_1, img_home;
let btn_home, btn_add, btn_act, btn_prof, btn_search;

function preload() {
  img_home = loadImage('assets/IMG_2021.PNG');
}

function setup() {
  createCanvas(900, 1600);
  // img_1 = loadImage('IMG_4061.jpg');

  // button_1 = createButton('load gallery');
  // button_1.position(10,10);
  // button_1.mousePressed(loadPic);

  btn_home = createImg('assets/home.png');
  btn_home.position(10,1500);
  btn_home.mousePressed(load_home);
  // image(img_home, 0, 0, 900, 1600);
}

function load_home() {
  // put drawing code here
  image(img_home, 0, 0, 900, 1600);

}