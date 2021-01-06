<template>
  <el-container>
    <el-header class="main">
      <div class="section_inner">
        <qqMusicTop></qqMusicTop>
        <Category></Category>
      </div>
    </el-header>
    <el-main>
      <List></List>
    </el-main>
  </el-container>
</template>

<script>
import qqMusicTop from "@/components/qqMusic/qqMusic-Top";
import Category from "@/components/qqMusic/Category";
import List from "@/components/qqMusic/List";
export default {
  name: "qqMusic",
  components: {
    qqMusicTop,
    Category,
    List,
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
</style>