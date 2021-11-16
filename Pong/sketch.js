var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 15;

// var xBallChange = 5;
var xBallChange = 6;
// var yBallChange = 5;
var yBallChange = 6;


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

var gameOver = false;



function setup() {
    var gameHeight = windowHeight - 200;
    createCanvas(windowWidth, gameHeight);
    //Enter RGB Color
    background(33,33,33);

    //playerPaddle = createCanvas(10,100);
    //background(0,0,0);

    //compPaddle = createCanvas(10,100);
    //background(0,0,0);

  }

  //TODO: WORK ON DELAYED COMPUTER MOVEMENT TO MAKE IT POSSIBLE TO WIN
  function compMovement(){
    // compYpaddle = random(0.5, 0.8)*(yBall - 50);
    // compYpaddle = ((yBall - (compYpaddle + compPaddleHeight / 2))) * 0.8;
    if((compYpaddle+50)<yBall){
        compYpaddle = compYpaddle + (random(3, 7));
        // random(0.5, 0.8)
    }
    if((compYpaddle+50)>yBall){
        compYpaddle = compYpaddle - (random(3, 7));
        // random(3, 7)
    }
  }
  
  function draw() {
    background(33,33,33);
    fill(236,239,241);
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


    if ((xBall > playerXpaddle && xBall < playerXpaddle + playerPaddleWidth) && ((yBall + (diameter/2) <= playerYpaddle + 100) && (yBall + (diameter/2) >= playerYpaddle))){
        xBallChange *= -1;
        // yBallChange *= -1;
        print("playerCollision");
    }

    if ((xBall > compXpaddle && xBall < compXpaddle + compPaddleWidth) && ((yBall + (diameter/2) <= compYpaddle + 100) && (yBall + (diameter/2) >= compYpaddle))){
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
        // setTimeout(() => {  compYpaddle = (yBall - 50); }, 1000);
        compMovement();
        // ballMovement();
    }

    if (!started){
        playerXpaddle = windowWidth - 75;
        // playerYpaddle = windowHeight / 2;
        

        compXpaddle = 75;
        compYpaddle = windowHeight / 2;


        started = true
        rerack();
        // setTimeout(function (){
        //     started = true;
        //   }, 3000);

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

    if (gameOver == true){
        if (playerScore == 5){
            text("You Win!!", (windowWidth/2)-50,200);
        }
        if (compScore == 5){
            text("Computer Wins!", (windowWidth/2)-50,200);
        }
    }

    fill(120,144,156);
    noStroke();
    rect(playerXpaddle,playerYpaddle ,playerPaddleWidth,playerPaddleHeight);
    rect(compXpaddle, compYpaddle,compPaddleWidth,compPaddleHeight);

    // fill(238,238,238);
    // textSize(24);
    // text("Opponent Score: " + compScore, 10,20);

    fill(238,238,238);
    textSize(30);
    text("" + compScore + " | " + playerScore + "", windowWidth/2,35);

    // print(yBall);
    print(playerYpaddle);

  }
  function backToMain(){
      window.location.href = "../index.html"
  }

  function ballMovement(){
    // var xBallChange = 5;
    xBallChange = 6;
    // var yBallChange = 5;
    yBallChange = 6;
  }

  function rerack(){
      if (playerScore == 5){
        xBall = windowWidth/2;
        yBall = 50
        yBallChange *= 0;
        xBallChange *= 0;
        gameOver = true;
      }
      if(compScore == 5){
        xBall = windowWidth/2;
        yBall = 50
        yBallChange *= 0;
        xBallChange *= 0;
        // text("Computer Wins!", windowWidth/2,200);
        gameOver = true;
      }
      if(compScore < 5 && playerScore < 5){
        xBall = windowWidth/2;
        yBall = 50
        yBallChange *= 0;
        xBallChange *= 0;
        gameOver = false;
        setTimeout(function (){
          // yBallChange *= 1;
          // xBallChange *= 1;
  
          xBallChange = 6;
          yBallChange = 6;
        }, 3000);
      }
  }