<template>
  <el-container>
    <el-header class="main">
      <div class="section_inner">
        <qqMusicTop></qqMusicTop>
        <Category></Category>
      </div>
    </el-header>
    <el-main class="mod_bg">Main</el-main>
  </el-container>
</template>

<script>
import qqMusicTop from "@/components/qqMusic/qqMusic-Top";
import Category from "@/components/qqMusic/Category";
export default {
  name: "qqMusic",
  components: {
    qqMusicTop,
    Category
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100% !important;
  .section_inner {
    background: #fff;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }
}
.mod_bg {
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg) 50% 0
    repeat-x;
  position: relative;
}
</style>