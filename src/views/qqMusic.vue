<template>
  <div>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
name: "qqMusic"
}
</script>

<style lang="less" scoped>

.el-aside {
  width: 210px !important;
  height: 100vh;
  border-right: 1px solid #FFF;
  //background: #FFF;
}
</style>