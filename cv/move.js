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
    
window.onload = Toggle;
window.onload = Avatar;

setInterval(function(){ 
      Avatar();
}, 6000);

document.getElementsByClassName("accordionItem").onclick = function() {
    function toggleChild() {
        var headTxt = document.getElementsByClassName('accordionItem')
        headTxt.style.display = 'block';
    }
};

//var loopIt = setInterval(Avatar, 2000);
