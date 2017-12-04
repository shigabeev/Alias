function loadGame(){
  var store = new Store();
  command = store.getCurrentTeam();
  var span = document.getElementById("teamName")
  span.innerHTML = command;
}

function nextGame(){
  var store = new Store();
  store.nextTeam();
  command = store.getCurrentTeam();
  var span = document.getElementById("teamName")
  span.innerHTML = command;
}
