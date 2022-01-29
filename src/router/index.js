import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ'
import Tasks from '../views/Tasks'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/Tasks',
    name: 'Tasks',
    component: Tasks
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
