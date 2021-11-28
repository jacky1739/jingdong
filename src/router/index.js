import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
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
    path: '/shop/:id',
    name: 'shop',
    component: () => import('../views/shop/Shop.vue')
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
