import Home from '@/features/home/presentation/views/Home.vue'
import NumberTrivia from '@/features/number-trivia/presentation/views/NumberTrivia.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/features/about/presentation/views/About.vue')
  },
  {
    path: '/number-trivia',
    name: 'NumberTrivia',
    component: NumberTrivia,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
