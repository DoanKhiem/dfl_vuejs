import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import PropsView from '../views/props.vue'
import BunnyView from '../views/bunny.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/props',
      name: 'props',
      component: PropsView
    },
    {
      path: '/bunny',
      name: 'bunny',
      component: BunnyView
    },
  ]
})

export default router
