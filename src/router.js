import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home'
import City from './components/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
