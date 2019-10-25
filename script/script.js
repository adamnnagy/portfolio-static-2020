

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




// $(document).ready(function(){
//   $(".tile").hover(
//     function(){
//     console.log("hovering");
//     $(this).find(".tile-overlay").animate({opacity: 0.3, scale: 0.5}, 30);
//     $(this).find(".tile-text").animate({opacity: 1}, 30);
//     // $(this).find(".tile-text").css("opacity", "1");
//   }, function() {
//     $(this).find(".tile-overlay").css({"opacity": "0", "scale": "0"});
//     $(this).find(".tile-text").css("opacity", "0");
//   }
//   );



//   $(".glitch-title").click(function(){
//     $(this).hide();
//   })

// });




