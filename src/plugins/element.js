import {
  Aside,
  Button,
  Container,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Message
} from 'element-ui'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Footer)
Vue.use(Input)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)

// 将弹框组件全局挂在到VUe原型实例
Vue.prototype.$message = Message