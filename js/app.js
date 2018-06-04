$(document).ready(function() {

var homepage = "http://www.thedevtip.com/";
var orpage = "http://thedevtip.com/";
var current = window.location.href;
                      
if(current == homepage) {
    setTimeout(function () {
        window.location.href = "http://www.thedevtip.com/nav/"; 
    }, 9500);   
} 
else if (current == orpage){ 
    setTimeout(function () {
        window.location.href = "http://www.thedevtip.com/nav/"; 
    }, 9500);   
} else {

}
    
function ShowLocalDate(){
    var dNow = new Date();
    var localdate= (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    $('.date').html(localdate)
}
ShowLocalDate();    
    
setTimeout(function(){ 
$('#one').addClass('show')
}, 400);

setTimeout(function(){ 
$('#two').addClass('show')
}, 1200);

setTimeout(function(){ 
$('#three').addClass('show')
}, 3000);

setTimeout(function(){ 
   $('#three').addClass('css-typing') 
}, 3000);

setTimeout(function(){ 
$('#four').addClass('show')
}, 4800);

setTimeout(function(){ 
$('#five').addClass('show')
}, 6600);

setTimeout(function(){ 
  $('#five').addClass('css-typing') 
}, 6600);    
    
$.get("http://ipinfo.io", function (response) {
     var coords = response.loc;
     console.log("Coords: " + response.loc);

  $.simpleWeather({
    location: 'New York, New York.',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
    
}, "jsonp");    
    
// setTimeout(function() {
$('.blurred-image').css('opacity', '.9');
  // }, ); 
$('.f-wrap').load('cta.htm', function() {
  $('#submitit').attr("disabled", "disabled"); 
  $('#submitit').prop('disabled',true).addClass('disabled');

  $('#chandler').keyup(function(){
      var inputValue = this.value

      if (inputValue.toLowerCase().indexOf("friends") >= 0) {
          $('#submitit').removeAttr('disabled');
          $('#submitit').removeClass('disabled');
      }
  });
});

$('.request').fadeIn("slow");

      setTimeout(function(){
        $('.request').effect("bounce", {
            times: 1,
            distance: 80
        }, 200);
       }, 9200);

$("input").focusin(function() {
      setTimeout(function() {
      $('.start').text("That's the spirit! I offer many freelance dev services...");
    }, 2000);
});

$('.popup').click(function(event) {
  var width  = 575,
      height = 400,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;
  
  window.open(url, 'twitter', opts);

  return false;
});

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  $("span.sup").html("~/ Good Morning!");
} else if (curHr < 18) {
  $("span.sup").html("~/ Good Afternoon!");
} else {
  $("span.sup").html("~/ Good Evening!");
}

//$('.request').click(function(){
//    $(this).fadeTo("slow", 0, function(){
//        $(this).remove(),
//        $('span.general').hide();   
//        $('.iterm').hide();
//        $('.f-wrap').fadeIn("slow");        
//        $('span.subtle').fadeOut("fast");        
//        $('html').toggleClass('showy'); 
//        $('#weather').css({ 'display': "none",});
//        $('h1.title').css({ 'font-size': "16px", 'width': "100%"})        
//        $('.content').css({ display: "0px", height: "1100px",})
//        $('.quote-form').slideDown('1500');
//        window.location.hash = 'request';
//    });
//});

// $('.exit').click(function(){
//         window.location.hash = 'exit';
//     });
// });

if(document.URL.indexOf("#request") >= 0){
    $('span.general').hide();
    $('html').toggleClass('showy');           
    $('.start').fadeOut("slow");
    $('.iterm').hide();
    $('.content').css({'margin-top': "1%",})
    $('#search, .main_contain').fadeOut("fast");
    $('input#fill').fadeOut("slow");
    $('h1.sup').fadeIn("fast");
    $('#weather').css({ 'display': "none",});
    $('img.lucky').fadeIn("slow");
    $('.footer').fadeIn("slow");
    $('.f-wrap').fadeIn("slow");
    $('span.subtle').fadeOut("fast");
    $('h1.title').css({ 'font-size': "16px", 'width': "100%",})

 $('.request').fadeTo("slow", 0, function(){
        $('.request').remove(),
        $('.content').css({ padding: "0px", height: "1100px",})
        $('.quote-form').slideDown('1500');
        window.location.hash = 'request';
    });
}

if(document.URL.indexOf("/nav/") >= 0){

  $('div#topDiv').animate({
      //51% for chrome
      height: "50%"
      ,opacity: 1
  }, 400);
  $('div#bottomDiv').animate({
      //51% for chrome
      height: "50%"
      ,opacity: 1
  }, 400, function(){
          $('div#centerDiv').css({display: "block"}).animate({
                  width: "0%",
                  left: "50%"
               }, 300);
          }
  );
}
    
if(document.URL.indexOf("/nav_/") >= 0){

  $('div#topDiv').animate({
      //51% for chrome
      height: "50%"
      ,opacity: 1
  }, 400);
  $('div#bottomDiv').animate({
      //51% for chrome
      height: "50%"
      ,opacity: 1
  }, 400, function(){
          $('div#centerDiv').css({display: "block"}).animate({
                  width: "0%",
                  left: "50%"
               }, 300);
          }
  );
}    
//  
    
$('.contacter').click(function(){
     $('.content').css({ padding: "0px", height: "1200px",})
     $('.quote-form').slideDown('1500');
});   
    
//if(document.URL.indexOf("#services") >= 0){
//    $('span.author').text('Popular Services & Common Requests');    
//    var list = $("span.subtle").append('<ul><li>Full Cycle Web Development</li><li>Project Planning</li><li>Best Practices</li><li>Programming in HTML5/CSS3/SASS/JavaScript/JSON/PHP etc</li><li>API Implementation or Development</li><li>Layout Design/ Web/Software Design</li><li>Tutoring/Teaching/Traning</li><li>Website Migrations & Rebuilds</li><li>User Interface Development/Design</li></ul>');
//}
    
$('.contacter').click(function(){
     $('.content').css({ padding: "0px", height: "1200px",})
     $('.quote-form').slideDown('1500');
});     

setTimeout(function() {
    $('h1.sup').fadeIn(3000);
  }, 5000);

setTimeout(function() {
    $('#search').fadeIn(3000);
  }, 5500);

// setTimeout(function() {
//     $('.response').fadeIn(3000);
//   }, 15500);

$("#explode").click(function() {

    $(this).hide("explode", {pieces: 200}, 1000);

    $('.start').fadeOut("slow");
    $('.start_mobi').fadeOut("slow");
    $('input#fill').fadeOut("slow");
    $('span.general').hide();        
    $('.sup').fadeOut("slow");

    setTimeout(function(){
      var input = $("input#fill").val();
      $(".main_contain").prepend('<div class="item">Coincidentally, I am a <span class="blank">' + input + '</span> person named <span class="">Cameron</span>.</div>').fadeIn('slow');
      $('h1.luck').fadeIn("slow");
      // $('.arrowsug').fadeIn("fast", function() { $(this).delay(500).fadeOut("slow"); });
      $('img.lucky').fadeIn("fast");
      // $('.request').fadeIn("fast");
      $('.footer').fadeIn("slow");
      $('#explode2').fadeIn("slow");
      // $('.svrap').fadeIn(5000);      

    }, 2000);
    return false;    
    });

// $('body').on('click', '[data-editable]', function(){
  
//   var $el = $(this);
              
//   var $input = $('<input/>').val( $el.text() );
//   $el.replaceWith( $input );
  
//   var save = function(){
//     var $p = $('<p data-editable/>').text( $input.val() );
//     $input.replaceWith( $p );
//   };
  
  /**
    We're defining the callback with `one`, because we know that
    the element will be gone just after that, and we don't want 
    any callbacks leftovers take memory. 
    Next time `p` turns into `input` this single callback 
    will be applied again.
  */
  // $input.one('blur', save).focus();
  
});

// $("#explode2").click(function() {

//     $(this).hide("explode2", {pieces: 400}, 2000);

//     setTimeout(function(){
//      // $('html,body').animate({scrollTop: $(".second").offset().top},'slow');     
//       // alert("Contact me by Email: 'cashwellcamc@gmail.com'!");
//       window.location = "http://www.cdev.co/notes";
//     }, 2000);
//     return false;  
      
//     });

// });