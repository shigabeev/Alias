class Store{
  initStore(){
    window.localStorage.setItem('teams', JSON.stringify(["Pes", "Kit"]));
  }

  getTeams(){
    var commands = JSON.parse(window.localStorage.getItem('teams'));
    return commands;
  }

  removeTeam(item){
    var commands = JSON.parse(window.localStorage.getItem('teams'));
    var i = commands.indexOf(item);
    commands.splice(i, 1);
    window.localStorage.setItem('teams', JSON.stringify(commands));
  }

  addTeam(item){
    var commands = JSON.parse(window.localStorage.getItem('teams'));
    commands.push(item)
    window.localStorage.setItem('teams', JSON.stringify(commands));
  }

  nextTeam(){
    var commands = JSON.parse(window.localStorage.getItem('teams'));
    var index = JSON.parse(window.localStorage.getItem('currentTeamIndex'));
    if (index === null){
      index = 0;
    }
    index += 1
    if (index > commands.length - 1){
      index = 0;
    }
    window.localStorage.setItem('currentTeamIndex', JSON.stringify(index));
  }

  getCurrentTeam(){
    var commands = JSON.parse(window.localStorage.getItem('teams'));
    var index = JSON.parse(window.localStorage.getItem('currentTeamIndex'));
    if (index === null){
      index = 0;
      window.localStorage.setItem('currentTeamIndex', JSON.stringify(index));
    }
    return commands[index];
  }
}
