var COMMANDS = ["Pes", "Kit"];

function loadCommands(){
  var table = document.getElementById("commands");
  COMMANDS.forEach(function(item, i, arr){
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
  COMMANDS.push(newCommand);
  addCommand(newCommand);
}

function delCommandEvent(btn){
  var row = btn.parentNode.parentNode;
  var removedItem = row.getElementsByTagName("td")[0].innerHTML;
  var i = COMMANDS.indexOf(removedItem);
  COMMANDS.splice(i, 1)
  row.parentNode.removeChild(row);
}
