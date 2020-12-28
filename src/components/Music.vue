<template>
  <div>
    <div class="m-top">
      <div class="wrap">
        <h1 class="logo"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.m-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
}
.m-top .wrap {
  width: 1100px;
  margin: 0 auto;
}
.m-top .logo {
  background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?3b29c730f12349abdc07807bac6481c0)
    no-repeat 0 9999px;
  float: left;
  width: 176px;
  height: 69px;
  background-position: 0 0;
}
</style>