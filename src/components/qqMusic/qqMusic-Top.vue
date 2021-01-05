<template>
  <div class="nav-top">
    <h1 class="qqmusic_title">
      <a class="qqmusic_title">
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
    <div class="mod_top_search">
      <div class="mod_search_input">
        <input
          class="search_input__input"
          type="search"
          placeholder="搜索音乐、MV、歌单、用户"
        />
        <button class="search_input__btn">
          <i class="icon_search sprite"></i>
        </button>
      </div>
    </div>
    <div class="header__opt">
      <!-- 未登录 -->
      <div class="mod_top_login">
        <a class="top_login__link">登录</a>
        <div class="mod_select_open"></div>
      </div>
    </div>
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
  .mod_top_search {
    position: absolute;
    top: 0;
    right: 284px;
    .mod_search_input {
      border: 1px solid #c9c9c9;
      padding: 0 33px 0 11px;
      line-height: 36px;
      height: 36px;
      margin-top: 26px;
      position: relative;
      border-radius: 3px;
      background-color: #fff;
      -webkit-transition: width 0.6s ease-out;
      transition: width 0.6s ease-out;
      .search_input__input {
        line-height: 1.5;
        font-family: poppin, Tahoma, Arial, \5fae\8f6f\96c5\9ed1, sans-serif;
        width: 190px;
        height: 36px;
        border: 0 none;
        font-size: 14px;
        background: 0 0;
        -webkit-transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
        transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
      }
      .search_input__btn {
        position: absolute;
        top: 0;
        right: 0;
        border: 0 none;
        width: 38px;
        height: 35px;
        overflow: visible;
        background: 0 0;
        cursor: pointer;
        .icon_search {
          position: absolute;
          top: 50%;
          right: 11px;
          margin-top: -8px;
          width: 16px;
          height: 16px;
          background-position: 0 -720px;
        }
        .sprite {
          background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3);
          background-image: -webkit-image-set(
                url(https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3)
                  1x,
                url(https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite@2x.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=ce93ff148404a1f9918b8bc107e7dd6b)
                  2x
              );
        }
        .icon_txt {
          font: 0/0 a;
        }
      }
    }
  }
  .header__opt {
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    line-height: 90px;
    .mod_top_login {
      font-size: 0;
      height: 90px;
      line-height: 90px;
      .top_login__link {
        position: relative;
        z-index: 12;
        font-size: 16px;
        float: left;
        width: 38px;
        margin-right: 10px;
        text-align: center;
      }
      .mod_select_open {
        width: 122px;
        float: left;
        position: relative;
        height: 38px;
        font-size: 13px;
        margin-top: 24px;
      }
    }
  }
}
</style>