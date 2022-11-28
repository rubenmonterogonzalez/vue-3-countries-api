import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Country from '../views/Country.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/country/:id',
      name: 'country',
      component: Country,
      props: true
    }
  ]
})

export default router
