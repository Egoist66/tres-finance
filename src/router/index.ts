import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { title: 'Accounts' },
      name: 'Accounts',
      component: () => import('../views/Accounts.vue'),
    },
  
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})


export default router
