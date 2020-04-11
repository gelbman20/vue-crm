import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty-layout'
    },
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty-layout'
    },
    component: () => import('../views/Register')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Categories')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/planing',
    name: 'Planing',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Planning')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Record')
  },
  {
    path: '/history',
    name: 'History',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/History')
  },
  {
    path: '/detail-record',
    name: 'Detail Record',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/History')
  },
  {
    path: '/users',
    name: 'Users',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Users')
  },
  {
    path: '/drivers',
    name: 'Drivers',
    meta: {
      layout: 'main-layout'
    },
    component: () => import('../views/Drivers')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
