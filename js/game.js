// Actions on load

var store = Store()
document.getElementById('timer').innerHTML = 0 + ":" + store.getSettings["timer"];

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
    var store = new Store()
    store.nextTeam()
}

// Actions when timer is over
function gameOver() {
    window.location.href = "count.html";
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

    nextWord();
  }

  function nextGame(){
    var store = new Store();
    store.nextTeam();
    command = store.getCurrentTeam();
    var span = document.getElementById("teamName")
    span.innerHTML = command;
  }

  function nextWord(){
    var store = new Store();

    var word = document.getElementById("word");
    word.innerHTML = store.getCurrentWord();

    store.nextWord();
  }

  function rightWord(){
    var store = new Store();
    var team = store.getCurrentTeam();
    var word = store.getCurrentWord();
    store.addWordResult(team, word, true)
    nextWord();
  }

  function wrongWord(){
    var store = new Store();
    var team = store.getCurrentTeam();
    var word = store.getCurrentWord();
    store.addWordResult(team, word, false);
    nextWord();
  }
