import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',

    component: () => import('../views/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
