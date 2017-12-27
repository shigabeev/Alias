function loadResults(){
  var store = new Store();
  var table = document.getElementById("results");

  var results = store.getWordResult();
  var commonSum = 0;
  curr_team = store.getCurrentTeam()

  var f = function (team, _, _){
    var sum = 0;
    Object.keys(results[curr_team]).forEach(function (word, _, _){

        var subrow = table.insertRow(0);
        var cellWord = subrow.insertCell(0);
        cellWord.className = "word";
        var cellRes = subrow.insertCell(1);
        cellRes.className = "check";
        cellWord.innerHTML = word;
        cellRes.innerHTML = results[team][word] ? "✓" : "×";
        sum = sum + results[team][word];
        commonSum += 1;

      })

      var row = table.insertRow(0);
      var cellTeamRes = row.insertCell(0);
      cellTeamRes.innerHTML = sum;
      var cellTeam = row.insertCell(0);
      cellTeam.innerHTML = team;

  }
  f(curr_team);

  alert(store.getTeams())

  alert(Object.keys(results))

  var finished = store.getTeams().length == Object.keys(results).length;

  var word_count = document.getElementById("wordCount");
  word_count.innerHTML = commonSum;

  if (!finished){
    document.getElementById("nextRound").style.visibility = "visible";
    document.getElementById("finals").style.visibility = "hidden";
  }
  else{
    document.getElementById("finals").style.visibility = "visible";
    document.getElementById("nextRound").style.visibility = "hidden";
  }
}

function nextRound(){
  window.location.href = "game.html";
  var store = Store()
  store.nextTeam()
}
