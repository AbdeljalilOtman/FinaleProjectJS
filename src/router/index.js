import { createRouter, createWebHashHistory } from 'vue-router';
import { projectAuth } from '../firebase/config';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/dashboard/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: { requiresAuth: true }

  },
  {
    path: '/dashboard/templates/:id',
    name: 'TemplateView',
    component: () => import('../views/TemplateView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/myresumees',
    name: 'ResumeesView',
    component: () => import('../views/ResumeesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/recents/:id',
    name: 'RecentView',
    component: () => import('../views/RecentView.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = projectAuth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = await getCurrentUser();

  if (requiresAuth && !currentUser) {
    next('/welcome');
  } else if (currentUser && from.path === '/dashboard' && to.path === '/welcome') {
    // Prevent going back to /welcome from /dashboard
    next(false);
  } else {
    next();
  }
});


export default router;
