<template>
  <el-container class="container">
    <el-header>
      <el-menu
        router
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
      >
        <el-menu-item index="/home">主页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
        <el-menu-item>
          <el-button type="info" @click="logout">退出</el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  data() {
    return {
      isCollapse: true,
      activeIndex: "/home",
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear(); // 清空token
      this.$router.push("/login"); // 跳转到登录页面
    },
    collapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  components: {
    'v-footer': Footer
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  // display: flex;
  // 左右贴边对齐
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.el-main {
  background-color: #eaedf1;
}
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
</style>