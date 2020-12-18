import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 配置请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 在request 拦截器中, 展示进度条 NProgress.start()
// 请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use(config => {
  // console.log(config)
  // 为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})

// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')