import Vue from 'vue'
import VueRouter from 'vue-router'

import Plan from '../views/Plan'
import Success from '../views/Success'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Plan
  },
  {
    path: '/successful',
    name: 'success',
    component: Success
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
