// var rad = document.duration;
// var prev = null;
// for(var i = 0; i < rad.length; i++) {
//     rad[i].onclick = function() {
//         (prev)? alert(prev.value):null;
//         if(this !== prev) {
//             prev = this;
//         }
//         console.log(this.value);
//     };
// }

function changeDuration (time){
    alert("Gotcha !");
}

function save(){
  var formElements = document.getElementById("settingsForm").elements;
  time = "30";
  //fund time
  for (var i=0; i<formElements.length; i++) {
    if(formElements[i].value){
      time = formElements[i].name;
    }
  }

  var store = new Store();
  var settings = {
    "timer": "0:" + time
  };

  store.setSettings(settings)

  window.location.href = "welcome.html";

}
