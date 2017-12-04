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
