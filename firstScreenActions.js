var COMMANDS = ["Pes", "Kit"];

function loadCommands(){
  // <tr>
  //     <td>Пёс</td>
  //     <td class="delBut"><button>—</button></td>
  // </tr>
  var table = document.getElementById("commands");
  COMMANDS.forEach(function(item, i, arr){
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)

    cell1.innerHTML = item;
    cell2.classList.add("delBut");
    cell2.innerHTML = "<button onclick=\"delCommand(this)\">—</button>"

  })
}

function addCommand(){
  var newCommand = document.getElementById("commandInput").value
  alert(newCommand)
  COMMANDS.push(newCommand)

  var table = document.getElementById("commands");
  row = table.insertRow(0);
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)

  cell1.innerHTML = newCommand;
  cell2.classList.add("delBut");
  cell2.innerHTML = "<button onclick=\"delCommand(this)\">—</button>"

}

function delCommand(btn){
  var row = btn.parentNode.parentNode;
  var removedItem = row.getElementsByTagName("td")[0].innerHTML;
  var i = COMMANDS.indexOf(removedItem);
  COMMANDS.splice(i, 1)
  row.parentNode.removeChild(row);
}
