<template>
  <div class="footer">
    <div class="container">
      <div class="link-wrap">
        <div class="link-item">
          <h4>Navigation</h4>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Design</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">给我留言</a></li>
          </ul>
        </div>
        <div class="link-item">
          <h4>Follow Me</h4>
          <ul>
            <li><a href="">Weibo</a></li>
            <li><a href="">Wechat</a></li>
            <li><a href="">QQ</a></li>
            <li><a href="">Email</a></li>
            <li><a href="">CSDN</a></li>
          </ul>
        </div>
        <div class="link-item">
          <h4>Blog Website</h4>
          <ul>
            <li><a href="">CSDN</a></li>
            <li><a href="">OSCHINA</a></li>
            <li><a href="">segmentfault</a></li>
            <li><a href="">juejin</a></li>
            <li><a href="">给我留言</a></li>
          </ul>
        </div>
        <div class="link-item">
          <h4>Resources</h4>
          <ul>
            <li><a href="">Designmodo</a></li>
            <li><a href="">Tympanus.net</a></li>
            <li><a href="">Uisdc</a></li>
            <li><a href="">scotch.io</a></li>
            <li><a href="">css-tricks</a></li>
          </ul>
        </div>
        <div class="link-item">
          <div class="copyright">
            <img
              src="https://www.dengzhanyong.com/img/name.a3c3e9aa.png"
              style="width: 90%"
            />
            <p>❤️ Copyright ©2020 邓占勇的博客</p>
            <p>
              为了您更好的体验<br />建议您使用
              <a href="https://www.google.com/chrome/" target="_blank">
                Chrome浏览器
              </a>
            </p>
            <p class="gov">
              <a href="http://www.beian.miit.gov.cn/" target="_blank">
                渝ICP备18005329号-3
              </a>
            </p>
            <p style="margin-top: 1rem">您是第18283位访客，今日增长32</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 312px;
  position: relative;
  margin: 4rem 0 0;
  padding: 3rem 15px;
  font-size: 12px;
  line-height: 1.75rem;
  background: #fff;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  a {
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  .container {
    max-width: 1140px;
    margin: 0 auto;
    .link-wrap {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      flex-wrap: wrap;
      letter-spacing: 1px;
      .link-item:first-child {
        width: 24%;
      }
      .link-item {
        width: 19%;
        text-align: left;
        h4 {
          position: relative;
          font-size: 16px;
          line-height: 2em;
          color: rgba(0, 0, 0, 0.7);
          letter-spacing: 1px;
          font-weight: 400;
          margin: 0 0 6px;
        }
        ul {
          margin-top: 20px;
          margin-bottom: 20px;
          padding-left: 0;
          li {
            display: list-item;
            list-style: none;
            margin-top: 5px;
            margin-left: 0;
            margin: 0.7em 0;
            a {
              text-decoration: none;
              font-size: 13px;
              color: rgba(0, 0, 0, 0.55);
            }
          }
        }
        .copyright {
          height: 100%;
          -webkit-box-align: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          display: flex;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          p {
            margin: 0;
            line-height: 2em;
            a {
              font-size: 12px;
            }
          }
          .gov {
            text-align: left;
          }
        }
      }
    }
  }
}
.clearfix {
  zoom: 1;
}
</style>
