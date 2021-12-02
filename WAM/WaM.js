let circle1;
let circle2;
let circle3;
let circle4;
let circle5;
let circle6;
let square;
let r = 160;

var whacked = false;

var intervalId;

var score = -1;

var gameOver = false;
var endGameState = false;

var middle = 400;


var ranX;
var ranY;

function preload(){
  img = loadImage('../Assets/mole.png');
}

function backToMain(){
  window.location.href = "../index.html"
}

function setup() {
  createCanvas(800, 800);
  mouseClicked();
  // print("Whack-A-Mole")
  
xOpts = [160, 400, 640];
yOpts = [160, 640];
  
}

function checkForWack(){
  if (score == 10){
    gameOver = true;
  }else{
    gameOver = false;
  }
}

function mouseClicked() {
  var distance = int(dist(mouseX, mouseY, ranX, ranY));

  if ((distance <= r) && (gameOver == false)) {
    // console.log("mole clicked")
    score++;
  };
};

intervalId = window.setInterval(function() {
  changeMole();
}, 1500);

function changeMole(){
  // console.log("2sec");
  if(endGameState == false){
  ranX = random(xOpts);
  ranY = random(yOpts);
  }
}

function restartGame(){
  gameOver = false;
  endGameState = false;
  score = 0;
}
 

function draw() {
  background(220);
  fill(222,184,135);
  circle(160, 160, 160);
  fill(222,184,135);
  circle(640, 160, 160);
  fill(222,184,135);
  circle(160, 640, 160);
  fill(222,184,135);
  circle(640, 640, 160);
  fill(222,184,135);
  circle(400, 640, 160)
  fill(222,184,135);
  circle(400, 160, 160)
  fill(222,184,135);
  circlex = circle(400, 160, 160);

  image(img, ranX-80, ranY-80 , 160, 160);

  textSize(25);
  text("Your score: " + score, 10,30);

  if (gameOver == true){
    if (score >= 10){
        textSize(30);
        text("You Win!!", 350,350);
        fill(0, 102, 153, 51);
        endGameState = true;
    }
}
  checkForWack();
}

