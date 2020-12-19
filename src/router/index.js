import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
//  to将要访问的路径
//  from代表从哪个路径跳转而来
//  next是一个函数，表示放行
//  next() 放行   next(' /login')强制跳转
router.beforeEach((to, from, next) => {})

export default router
