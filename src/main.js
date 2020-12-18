import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'\
import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 配置请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')