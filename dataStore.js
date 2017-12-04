class Store{
  initStore(){
    window.localStorage.setItem('teams', JSON.stringify(["Pes", "Kit"]));
    var settings = {
      "timer": "0:30"
    };
    window.localStorage.setItem('settings', JSON.stringify(settings));
    var words = [
      "Рот",
      "Нос",
      "Спина",
      "Вуркендындль"
    ];
    window.localStorage.setItem('words', JSON.stringify(words));
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

  getSettings(){
    return JSON.parse(window.localStorage.getItem('settings'));
  }

  setSettings(settings){
      window.localStorage.setItem('settings', JSON.stringify(settings));
  }

  nextWord(){
    var words = JSON.parse(window.localStorage.getItem('words'));
    var index = JSON.parse(window.localStorage.getItem('currentWordIndex'));
    if (index === null){
      index = 0;
    }
    index += 1
    if (index > words.length - 1){
      index = 0;
    }
    window.localStorage.setItem('currentWordIndex', JSON.stringify(index));
  }

  getCurrentWord(){
    var words = JSON.parse(window.localStorage.getItem('words'));
    var index = JSON.parse(window.localStorage.getItem('currentWordIndex'));
    if (index === null){
      index = 0;
      window.localStorage.setItem('currentWordIndex', JSON.stringify(index));
    }
    return words[index];
  }
}
