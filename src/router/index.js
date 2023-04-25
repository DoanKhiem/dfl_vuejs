import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components_product/Home.vue'
import Camera from '../components_product/Camera.vue'
// import Gamepad from '../components_product/Gamepad.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomeView
    },
    {
      path: '/camera',
      // name: 'home',
      component: Camera
    },
    {
      path: '/gamepad',
      // name: 'home',
      component: () => import('../components_product/Gamepad.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
