var rad = document.duration;
var prev = null;
for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        (prev)? alert(prev.value):null;
        if(this !== prev) {
            prev = this;
        }
        console.log(this.value);
    };
}

function changeDuration (time){
    alert("Gotcha !");
}