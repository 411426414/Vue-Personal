<template>
  <div class="about">
    <div class="img">关于我</div>
    <div class="about-me">
      <h1 class="title">我的简介</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.about {
  width: 100vw;
}
.img {
  width: 100%;
  height: 100vh;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608574050504&di=68f515bd3d85c220d756640c725fb8e2&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201706%2F24%2F120513xjmo2xki377j4d9x.jpg);
}
.about-me {
  width: 100%;
  height: 810px;
}
.title {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  position: relative;
  padding: 60px 20px;
  margin: 0;
  font-size: 30px;
}
.title:after {
  content: "";
  position: absolute;
  right: -5px;
  top: 55%;
  height: 1em;
  width: 50%;
  border-bottom: 2px solid #ccc;
  border-right: 2px solid #ccc;
}
</style>