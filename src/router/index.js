import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',

    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/dashboard/templates/:id',
    name: 'TemplateView',

    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/dashboard/recents/:id',
    name: 'RecentView',

    component: () => import('../views/RecentView.vue')
  }

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
