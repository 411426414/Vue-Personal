<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main class="mod_bg">Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: "qqMusic",
};
</script>

<style lang="less" scoped>
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1366px;
}
li {
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
}
.mod_bg {
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg) 50% 0
    repeat-x;
  position: relative;
}
</style>