var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 15;

var xBallChange = 5;
var yBallChange = 5;

var playerXpaddle;
var playerYpaddle;
var playerPaddleWidth = 15;
var playerPaddleHeight = 100;


var compXpaddle;
var compYpaddle;
var compPaddleWidth = 15;
var compPaddleHeight = 100;

var started = false;


function setup() {
    var gameHeight = windowHeight - 200;
    createCanvas(windowWidth, gameHeight);
    //Enter RGB Color
    background(252,228,236);

    //playerPaddle = createCanvas(10,100);
    //background(0,0,0);

    //compPaddle = createCanvas(10,100);
    //background(0,0,0);

  }
  
  function draw() {
    background(252,228,236);
    fill(255,0,255);
    noStroke();
    ellipse(xBall,yBall,diameter);
    var gameHeight = windowHeight - 200;

    xBall += xBallChange;
    yBall += yBallChange;

    if (xBall < diameter/2 || xBall > windowWidth - 0.5*diameter){
        xBallChange *=-1;
    }
    if (yBall < diameter/2 || yBall > gameHeight - diameter){
        yBallChange *=-1;
    }

    if (!started){
        playerXpaddle = windowWidth - 75;
        // playerYpaddle = windowHeight / 2;
        

        compXpaddle = 75;
        compYpaddle = windowHeight / 2;

        started = true;
    }

    fill(0,255,255);
    noStroke();
    rect(playerXpaddle, winMouseY - 50,playerPaddleWidth,playerPaddleHeight);
    rect(compXpaddle, compYpaddle,compPaddleWidth,compPaddleHeight);

  }
  function backToMain(){
      window.location.href = "../index.html"
  }