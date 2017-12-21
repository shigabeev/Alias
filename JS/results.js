function loadResults(){
  var store = new Store();
  var table = document.getElementById("results");

  var results = store.getWordResult();
  var commonSum = 0;
  Object.keys(results).forEach(function (team, _, _){

    var sum = 0;
    Object.keys(results[team]).forEach(function (word, _, _){

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

  })

  var word_count = document.getElementById("wordCount");
  word_count.innerHTML = commonSum;

}
