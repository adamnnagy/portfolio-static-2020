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
  greeting: "Adam Nagy",
  intro: "filmmaker, developer, visual thinker"
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
