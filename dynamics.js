// Settings
var duration = 30;

// Actions on load
document.getElementById('timer').innerHTML = 0 + ":" + duration;

// Actions on pressing Start game
function StartGame() {
    // Make anser buttons visible
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
