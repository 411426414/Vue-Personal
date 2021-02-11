import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/pic',
        name: 'Pic',
        component: () => import('@/views/Pic')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
