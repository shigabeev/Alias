// Actions on load
document.getElementById('timer').innerHTML = 0 + ":" + Store.settings.timer;

// Actions on pressing Start game
function StartGame() {
    // Make answer buttons visible
    document.getElementById("yesbtn").style.display = "inline";
    document.getElementById("nobtn").style.display = "inline";

    // make .waitStart invisible
    var waitStartElms = document.getElementsByClassName('waitStart'), i;
    for (var i = 0; i < waitStartElms.length; i++) {
        waitStartElms[i].style.display = 'none';
    }

    startTimer();    // nuff said
}

// Actions when timer is over
function gameOver() {
    return;
}

// Other functions
function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if(m<0){
        gameOver();
        return;
    }
    document.getElementById('timer').innerHTML =  m + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}

function loadGame(){
    var store = new Store();
  
    var span = document.getElementById("teamName")
    command = store.getCurrentTeam();
    span.innerHTML = command;
  
    var timer = document.getElementById("timer");
    settings = store.getSettings();
    timer.innerHTML = settings.timer;
  
    var word = document.getElementById("word");
    word.innerHTML = store.getCurrentWord();
  }
  
  function nextGame(){
    var store = new Store();
    store.nextTeam();
    command = store.getCurrentTeam();
    var span = document.getElementById("teamName")
    span.innerHTML = command;
  }
  
  function rightWord(){
    
  }
  
  function wrongWord(){
    
  }
  