var COMMANDS = ["Pes", "Kit"];

function loadTeams(){
  var table = document.getElementById("commands");
  var store = new Store();
  commands = store.getTeams();
  commands.forEach(function(item, i, arr){
    addTeam(item);
  })
}

function addTeam(item){
  var table = document.getElementById("commands");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  cell1.innerHTML = item;
  cell2.classList.add("delBut");
  cell2.innerHTML = "<button onclick=\"delTeamEvent(this)\">—</button>"
}

function addTeamEvent(){
  var newTeam = document.getElementById("commandInput").value
  var store = new Store();
  store.addTeam(newTeam);
  addTeam(newTeam);
}

function delTeamEvent(btn){
  var row = btn.parentNode.parentNode;
  var removedItem = row.getElementsByTagName("td")[0].innerHTML;
  var store = new Store();
  store.removeTeam(removedItem);
  row.parentNode.removeChild(row);
}
