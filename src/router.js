import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projeto/:id',
      name: 'project',
      component: ProjectView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
