<template>
  <div class="about">
    <div class="header">
      <div class="info-wrap">
        <h1>To Be A Better Man</h1>
        <p>@ Since 2020</p>
        <div>
          <img src="" alt="" />
          <h2>Mr. Deng</h2>
          <p>All the surprises are on the way</p>
        </div>
      </div>
    </div>
    <div class="about-me">
      <div class="title-wrap">
      <h1 class="title">我的简介</h1>
      </div>
      <div class="content">
        <div class="cover"></div>
        <div class="introduction">
          <p>
            嗨！我是中国的邓（邓）勇先生；我毕业于
            <a href="http://www.wspc.edu.cn/" target="_blank">武汉船舶职业技术学院</a>。我的专业是
            <a href="https://baike.baidu.com/item/计算机应用技术/15968" target="_blank">计算机应用技术</a>。但是我喜欢前端。所以我自学了前端，这成为我的工作。我想在网页上产生一些不同的效果。现在，我是重庆的主要Web前端开发人员，在一家国有企业工作。
          </p>
          <p>
            我非常喜欢设计。但我什至不属于入门级别。我只能参考别人的设计，然后添加一些自己的元素。但是我相信有一天其他人也会参考我的设计。
          </p>
          <p>
            我喜欢写网页并在网站上与他人共享。让更多的人了解我。结识更多志同道合的朋友。共同学习和交流，共同进步。如果您想与我联系，请使用以下几种方法。您可以发送电子邮件至411426414@qq.com。您也可以在网站上给我留言。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 100vh;
}
.about-me {
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 80px;
}
.title-wrap {
  text-align: center;
}
.title {
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
.content {
  position: relative;
}

.cover {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(https://www.dengzhanyong.com/img/aboutMe-bg.fc46291b.jpg);
  background-attachment: fixed;
  background-size: cover;
  border-radius: 8px;
  filter: blur(8px);
  z-index: -10;
}
.introduction {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  padding: 15px;
  text-align: left;
  color: #333;
  color: #fff;
  line-height: 2em;
  font-size: 18px;
  font-family: acuta;
  text-indent: 2em;
}

.content .introduction a {
  color: #0ad0ab;
  font-style: italic;
}
</style>