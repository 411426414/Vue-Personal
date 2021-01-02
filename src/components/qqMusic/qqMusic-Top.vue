<template>
  <div class="nav-top">
    <h1 class="qqmusic_title">
      <a href="" class="qqmusic_title">
        <img
          class="qqmusic_logo"
          src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png"
        />
      </a>
    </h1>
    <ul class="mod_top_nav">
      <li><a class="active" href="">音乐馆</a></li>
      <li><a href="">我的音乐</a></li>
      <li><a href="">客户端</a></li>
      <li><a href="">开放平台</a></li>
      <li><a href="">VIP</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
  .mod_top_nav {
    position: absolute;
    left: 198px;
    top: 0;
    li {
      position: relative;
      float: left;
      margin-right: -5px;
      a {
        display: block;
        padding: 0 20px;
        line-height: 90px;
        height: 90px;
        text-align: center;
        font-size: 18px;
      }
      a.active {
        background-color: #31c27c;
        color: #fff;
      }
    }
  }
}
</style>