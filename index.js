
// Find the right method, call on correct element
function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  
  // Launch fullscreen for browsers that support it!
  launchFullScreen(document.documentElement); // the whole page




function popUpAction(){
    alert("No Game Available :(");
}

function moveToGamePong(){
    window.location.href = "Pong/pong.html";
}
function moveToGameWAM(){
    window.location.href = "Pong/pong.html";
}
function moveToGameType(){
    window.location.href = "Pong/pong.html";
}
function moveToGameLineTrace(){
    window.location.href = "Pong/pong.html";
}

function infoButton(){
  alert("2021 FSE100\nCreated By: Tyler Garben\nTwitter: @tjg4005\nLinkedIn: https://www.linkedin.com/in/tylergarben");
}