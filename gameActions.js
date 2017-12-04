function loadGame(){
  var store = new Store();
  command = store.getCurrentCommand();
  var span = document.getElementById("teamName")
  span.innerHTML = command;
}

function nextGame(){
  var store = new Store();
  store.nextCommand();
  command = store.getCurrentCommand();
  var span = document.getElementById("teamName")
  span.innerHTML = command;
}
