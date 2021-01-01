<template>
  <el-container>
    <el-header class="main">
      <div class="section_inner">
        <div class="nav-top">
          <h1 class="qqmusic_title">
            <a href="" class="qqmusic_title">
              <img
                class="qqmusic_logo"
                src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png"
              />
            </a>
          </h1>
        </div>
      </div>
    </el-header>
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
.main {
  height: 142px !important;
  .section_inner {
    background: #fff;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    .nav-top {
      height: 90px;
      .qqmusic_title {
        position: absolute;
        left: 0;
        top: 10px;
        .qqmusic_logo {
          width: 170px;
          height: 46px;
        }
      }
    }
  }
}
.mod_bg {
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg) 50% 0
    repeat-x;
  position: relative;
}
</style>