class Store{
  initStore(){
    window.localStorage.setItem('commands', JSON.stringify(["Pes", "Kit"]));
  }

  getCommands(){
    var commands = JSON.parse(window.localStorage.getItem('commands'));
    return commands;
  }

  removeCommand(item){
    var commands = JSON.parse(window.localStorage.getItem('commands'));
    var i = commands.indexOf(item);
    commands.splice(i, 1);
    window.localStorage.setItem('commands', JSON.stringify(commands));
  }

  addCommand(item){
    var commands = JSON.parse(window.localStorage.getItem('commands'));
    commands.push(item)
    window.localStorage.setItem('commands', JSON.stringify(commands));
  }

  nextCommand(){
    var commands = JSON.parse(window.localStorage.getItem('commands'));
    var index = JSON.parse(window.localStorage.getItem('currentCommandIndex'));
    if (index === null){
      index = 0;
    }
    index += 1
    if (index > commands.length - 1){
      index = 0;
    }
    window.localStorage.setItem('currentCommandIndex', JSON.stringify(index));
  }

  getCurrentCommand(){
    var commands = JSON.parse(window.localStorage.getItem('commands'));
    var index = JSON.parse(window.localStorage.getItem('currentCommandIndex'));
    if (index === null){
      index = 0;
      window.localStorage.setItem('currentCommandIndex', JSON.stringify(index));
    }
    return commands[index];
  }
}
