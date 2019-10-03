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
function typeWriter(txt, i){
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    setTimeout(function(){
      typeWriter(txt, i + 1)}, speed);
  }
};

function resetTypeWriter(){
  tmpStr = myIntro[cnt % (myIntro.length)]; //gets word, loops through array

  document.getElementById("intro").innerHTML = "";
  var i = 0
  //typewriter
  cnt++;
};

//first run
window.addEventListener("load", typeWriter("who am I?", i));

//projects button
document.getElementById("projects-btn").addEventListener("click", function() {
  document.getElementById("projects-btn").innerHTML = "Coming soon!";
});

//if clicked then cycles through
document.getElementById("intro").addEventListener("click", function(){
  resetTypeWriter();
  typeWriter(tmpStr, i);
});

window.setInterval(function(){
  resetTypeWriter();
  typeWriter(tmpStr, i);
}, 2000);
