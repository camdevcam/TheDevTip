window.onload = Toggle;
window.onload = Avatar;
window.onload = Accordion;
//window.onload = startHide;

$("#coin").removeClass("flip");    

function Toggle() {
   var element = document.getElementById("experience");
   element.classList.toggle("opentoggle");
}
function Avatar(){ 
    var Coin = document.getElementById("coin");
    var degrees = 0;
    degrees += 1800;
    console.log(degrees)
    Coin.style.webkitTransform = "rotateY(" + degrees + "deg)";
    Coin.style.MozTransform = "rotateY(" + degrees + "deg)";
    Coin.style.msTransform = "rotateY(" + degrees + "deg)";
    Coin.style.OTransform = "rotateY(" + degrees + "deg)";
    Coin.style.transform = "rotateY(" + degrees + "deg)";
}
    
setInterval(function(){ 
      Avatar();
}, 6000);

setInterval(function(){ 
    $("#coin").toggleClass("flip");    
}, 5500);

//setInterval(function(){ 
//    $("#coin").removeClass("flip");    
//}, 8200);

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
$(function() {
    var $rotate = $("span.skill");
    var $rotate2 = $("span.skill2");
    
    setInterval(function(){
        $rotate.toggleClass("moveit");
    }, 4000);
    
    setInterval(function(){
        $rotate2.toggleClass("moveit2");
    }, 6000);    
    
});

setInterval(function() {
	$(".solar").toggleClass('active');
}, 1000);

setTimeout(function(){
    $(".fuz").css({"color":"rgba(1,1,1,1)", "text-shadow":"none"});
}, 21000);

//function splitWords() {
//  let quote = document.querySelector("blockquote q");
//  quote.innerText.replace(/(<([^>]+)>)/ig,"");
//  quotewords = quote.innerText.split(" "),
//  wordCount = quotewords.length;
//  quote.innerHTML = "";
//  for (let i=0; i < wordCount; i++) {
//    quote.innerHTML += "<span>"+quotewords[i]+"</span>";
//    if (i < quotewords.length - 1) {
//      quote.innerHTML += " ";
//    }
//  }
//  quotewords = document.querySelectorAll("blockquote q span");
//  fadeWords(quotewords);
//}
//function getRandom(min, max) {
//  return Math.random() * (max - min) + min;
//}
//function fadeWords(quotewords) {
//  Array.prototype.forEach.call(quotewords, function(word) {
//    let animate = word.animate([{
//      opacity: 0,
//      filter: "blur("+getRandom(2,5)+"px)"
//    }, {
//      opacity: 1,
//      filter: "blur(0px)"
//    }], 
//    { 
//      duration: 1000,
//      delay: getRandom(500,3300),
//      fill: 'forwards'
//    } 
//   )
//  })
//}
//splitWords();