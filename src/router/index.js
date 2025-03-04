import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = []
/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
