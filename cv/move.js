window.onload = Toggle;
window.onload = Avatar;
window.onload = Accordion;
//window.onload = startHide;

function Toggle() {
   var element = document.getElementById("experience");
   element.classList.toggle("opentoggle");
}
function Avatar(){ 
    var Coin = document.getElementById("coin");
    var degrees = 0;
//    body.onload = function() {
      degrees += 1800;
      console.log(degrees)
      Coin.style.webkitTransform = "rotateY(" + degrees + "deg)";
      Coin.style.MozTransform = "rotateY(" + degrees + "deg)";
      Coin.style.msTransform = "rotateY(" + degrees + "deg)";
      Coin.style.OTransform = "rotateY(" + degrees + "deg)";
      Coin.style.transform = "rotateY(" + degrees + "deg)";
//    }
}
    
setInterval(function(){ 
      Avatar();
}, 6000);

function Accordion(){ 
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}    