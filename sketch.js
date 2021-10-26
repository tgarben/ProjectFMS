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

var playerScore = 0;
var compScore = 0;

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


    // FIXME: COLLISSION NOT WORKING
    if ((xBall > playerXpaddle && xBall < playerXpaddle + playerPaddleWidth) && (yBall + (diameter/2) >= playerYpaddle)){
        xBallChange *= -1;
        // yBallChange *= -1;
        print("playerCollision");
    }

    if ((xBall > compXpaddle && xBall < compXpaddle + compPaddleWidth) && (yBall + (diameter/2) >= compYpaddle)){
        xBallChange *= -1;
        // yBallChange *= -1;
        print("CompCollision");
    }

    if (xBall > (playerXpaddle + 10)){
        print("Comp Score");
        compScore++;
        rerack();
    }

    if (xBall < (compXpaddle - 10)){
        print("Player Score");
        playerScore++;
        rerack();
    }

    if (started){
        compYpaddle = yBall - 50;
    }

    if (!started){
        playerXpaddle = windowWidth - 75;
        // playerYpaddle = windowHeight / 2;
        

        compXpaddle = 75;
        compYpaddle = windowHeight / 2;

        started = true;
    }

    playerYpaddle = winMouseY - 50;

    if (playerYpaddle >= gameHeight - 100){
        playerYpaddle = gameHeight - 100;
    }
    if (playerYpaddle <= 0){
        playerYpaddle = 0;
    }

    if (compYpaddle >= gameHeight - 100){
        compYpaddle = gameHeight - 100;
    }
    if (compYpaddle <= 0){
        compYpaddle = 0;
    }

    fill(0,255,255);
    noStroke();
    rect(playerXpaddle,playerYpaddle ,playerPaddleWidth,playerPaddleHeight);
    rect(compXpaddle, compYpaddle,compPaddleWidth,compPaddleHeight);

    fill(0,255,255);
    textSize(24);
    text("Opponent Score: " + compScore, 10,25);

    fill(33,33,33);
    textSize(24);
    text("Player Score: " + playerScore, windowWidth-195,25);

    // print(yBall);

  }
  function backToMain(){
      window.location.href = "../index.html"
  }

  function rerack(){
      xBall = windowWidth/2;
      yBall = 50
      yBallChange *= 0;
      xBallChange *= 0;
      setTimeout(function (){
        // yBallChange *= 1;
        // xBallChange *= 1;

        xBallChange = 5;
        yBallChange = 5;
      }, 3000);
  }