import {
  Button,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 将弹框组件全局挂在到VUe原型实例
Vue.prototype.$message = Message