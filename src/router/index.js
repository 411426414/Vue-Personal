import Login from '@/components/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/components/About')
      },
      {
        path: '/grade',
        name: 'Grade',
        component: () => import('../views/grade.vue')
      },
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

// 挂载路由导航守卫
//  to将要访问的路径
//  from代表从哪个路径跳转而来
//  next是一个函数，表示放行
//  next() 放行   next(' /login')强制跳转
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router