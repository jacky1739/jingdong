import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/Register.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/login/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
