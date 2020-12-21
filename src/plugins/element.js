import {
  Aside,
  Button,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
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
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

// 将弹框组件全局挂在到VUe原型实例
Vue.prototype.$message = Message