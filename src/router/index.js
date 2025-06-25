import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/orders',
      name: 'create-order',
      component: () => import('../views/CreateOrderView.vue'),
    },
    {
      path: '/orders/:id',
      name: 'edit-order',
      component: () => import('../views/EditOrderView.vue'),
    },
  ],
})

export default router
