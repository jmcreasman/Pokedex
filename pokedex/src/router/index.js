import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Pokedex from '../components/Pokedex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex
    }
  ]
})
