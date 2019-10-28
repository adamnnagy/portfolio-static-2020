

//TYPEWRITER SCRIPT

var myIntro = [
  "editor",
  "director",
  "VR enthusiast",
  "developer",
  "music producer",
  "problem-solver",
  "self-learner",
  "ever-critical"
];

var cnt = 0;
var tmpStr;
var speed = 100;
var i = 0;

//changes the string based on myIntro

//typeWriter script
function typeWriter(txt, i) {
  if (i < txt.length) {
    $("#intro").innerHTML += txt.charAt(i);
    setTimeout(function () {
      typeWriter(txt, i + 1)
    }, speed);
  }
};

function resetTypeWriter() {
  tmpStr = myIntro[cnt % (myIntro.length)]; //gets word, loops through array

  $("#intro").innerHTML = "";
  var i = 0
  //typewriter
  cnt++;
};

//first run
window.addEventListener("load", typeWriter("who am I?", i));





//projects button
$("projects-btn").click(function () {
  $("projects-btn").innerHTML = "Coming soon!";
});

//if clicked then cycles through
$("intro").click(function () {
  resetTypeWriter();
  typeWriter(tmpStr, i);
});

window.setInterval(function () {
  resetTypeWriter();
  typeWriter(tmpStr, i);
}, 2000);

// var videoViewedOn = $("#myVideo").attr("srcdesk");
// if ($(window).width() < 721) {
//   videoViewedOn = $("#myVideo").attr("srcmob");
// }
// $("#myVideo").append('<source src="' + videoViewedOn + '" type="video/mp4" >');

$(document).ready(function () {



  $(".cover-container, .container, .container-fluid").css({ "opacity": "0" });


  if ($(".cover-container").length) {
    $(".cover-container").animate({
      opacity: 1,
    }, 1500, function () {
      windowFadeIn();
    });
  } else {
    windowFadeIn();
  }

})

function windowFadeIn() {
  $(".container, .container-fluid").animate({
    opacity: 1,
  }, 600, function () {
    // Animation complete.
  });
}

$(window).on('unload', function () {

  $(".cover-container, .container, .container-fluid").animate({
    opacity: 0,
  }, 300, function () {
    // Animation complete.
  });
});





