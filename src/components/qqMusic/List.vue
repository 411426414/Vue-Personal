<template>
  <div>
    <ul class="title">
      <li>编号</li>
      <li>歌曲</li>
      <li>专辑</li>
      <li>时长</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  background: #d9edf7;
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  li {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  li:nth-of-type(1) {
    width: 10%;
  }
  li:nth-of-type(2) {
    width: 40%;
  }
  li:nth-of-type(3) {
    width: 40%;
  }
  li:nth-of-type(4) {
    width: 10%;
  }
}
</style>