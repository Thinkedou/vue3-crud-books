import { createRouter, createWebHistory } from 'vue-router'
import HomeView from  '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'homeAdmin',
      component: () => import('../views/AdminHome.vue')
    },
    {
      path: '/create',
      name: 'adminCreate',
      component: () => import('../views/AdminCreate.vue')
    }
  ]
})

export default router
