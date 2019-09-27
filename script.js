// import Vue from 'vue'
// import routes from './routes'

//routing
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const Projects = { template: '<p>project page</p>' }
const Resume = { template: '<p>resume page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/projects': Projects,
  '/resume': Resume,
  '/about': About
}

var data = {
  currentRoute: window.location.pathname,
  greeting: "ADAM NAGY"
}



var vm = new Vue ({
  el: '#app',
  data: data
  // computed: {
  //   ViewComponent () {
  //     const matchingView = routes[this.currentRoute]
  //     return matchingView
  //       ? require('./pages/' + matchingView + '.vue')
  //       : require('./pages/404.vue')
  //   }
  // },
  // render (h) { return h(this.ViewComponent) }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

//TYPEWRITER SCRIPT

var myIntro = [
  "filmmaker",
  "developer",
  "musician",
  "puppy-eyed",
  "happy",
  "crazy"
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

window.addEventListener("load", typeWriter("who am I?", i));


window.setInterval(function(){
  tmpStr = myIntro[cnt % (myIntro.length)]; //gets word, loops through array

  document.getElementById("intro").innerHTML = "";
  var i = 0
  //typewriter
  typeWriter(tmpStr, i);
  cnt++;
}, 2000);
