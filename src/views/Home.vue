<template>
  <el-container class="container">
    <el-header>
      <v-header></v-header>
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
import Header from '@/components/Header'
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
  components:{
    'vFooter': Footer,
    'vHeader': Header
  }
}
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