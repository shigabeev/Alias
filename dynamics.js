function StartGame() {
    document.getElementById("yesbtn").style.display = "inline";
    document.getElementById("nobtn").style.display = "inline";

    var waitStartElms = document.getElementsByClassName('waitStart'), i;
    
    for (var i = 0; i < waitStartElms.length; i ++) {
        waitStartElms[i].style.display = 'none';
    }
    //document.getElementsByClassName("waitStart").style.display = "none";
}