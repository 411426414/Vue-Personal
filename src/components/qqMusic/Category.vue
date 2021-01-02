<template>
  <div class="nav-bottom">
    <ul class="nav">
      <li><a href="">首页</a></li>
      <li><a href="">歌手</a></li>
      <li><a href="">新碟</a></li>
      <li><a href="">排行榜</a></li>
      <li><a href="">分类歌单</a></li>
      <li><a href="">电台</a></li>
      <li><a href="">MV</a></li>
      <li><a href="">数字专辑</a></li>
      <li><a href="">票务</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.nav-bottom {
  height: 52px !important;
  .nav {
    height: 51px;
    line-height: 51px;
    border-top: 1px solid #f2f2f2;
    padding-left: 230px;
    li {
      float: left;
      font-size: 15px;
      color: #c1c1c1;
      margin-right: 47px;
      a:hover {
        color: #f00;
        text-decoration: none;
      }
    }
  }
}
// }
</style>