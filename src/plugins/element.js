import {
  Aside,
  Button,
  Card,
  Container,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  Submenu,
  Table,
  TableColumn
} from 'element-ui'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Card)
Vue.use(Form)
Vue.use(Dialog)
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
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)

// 将弹框组件全局挂在到VUe原型实例
Vue.prototype.$message = Message