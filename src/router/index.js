import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main-layout',
      auth: true
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/',
    name: 'Users',
    meta: {
      layout: 'main-layout',
      auth: true
    },
    component: Users
  },
  {
    path: '/drivers',
    name: 'Drivers',
    meta: {
      layout: 'main-layout',
      auth: true
    },
    component: () => import('../views/Drivers')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else if ((to.path === '/login' || to.path === '/register') && currentUser) {
    next(from)
  } else {
    next()
  }
})

export default router
