var COMMANDS = ["Pes", "Kit"];

function loadCommands(){
  var table = document.getElementById("commands");
  var store = new Store();
  commands = store.getCommands();
  commands.forEach(function(item, i, arr){
    addCommand(item);
  })
}

function addCommand(item){
  var table = document.getElementById("commands");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  cell1.innerHTML = item;
  cell2.classList.add("delBut");
  cell2.innerHTML = "<button onclick=\"delCommandEvent(this)\">—</button>"
}

function addCommandEvent(){
  var newCommand = document.getElementById("commandInput").value
  var store = new Store();
  store.addCommand(newCommand);
  addCommand(newCommand);
}

function delCommandEvent(btn){
  var row = btn.parentNode.parentNode;
  var removedItem = row.getElementsByTagName("td")[0].innerHTML;
  var store = new Store();
  store.removeCommand(removedItem);
  row.parentNode.removeChild(row);
}
