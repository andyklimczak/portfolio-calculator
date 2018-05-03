import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import Disclaimer from '@/components/Disclaimer'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
