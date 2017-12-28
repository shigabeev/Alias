function init(){
    var winner = document.getElementById("winner")
    var store = new Store();

    var results = store.getWordResult();

    var best;
    var best_sum = 0;

    Object.keys(results).forEach(function(team, _, _){
        var sum = 0;
        Object.keys(results[team]).forEach(function (word, _, _){
            sum = sum + results[team][word];
          })

          if (sum > best_sum){
            best_sum = sum;
            best = team
          }
    });
    winner.innerHTML = best;
}
