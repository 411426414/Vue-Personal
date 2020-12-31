<template>
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
    <el-menu-item index="/music">音乐</el-menu-item>
    <el-menu-item index="/qqmusic">QQ音乐</el-menu-item>
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
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    logout () {
      
    }
  }
};
</script>

<style lang="less" scoped>
</style>