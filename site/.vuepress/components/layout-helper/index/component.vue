<template>
  <div class="component">
    <!-- LOGO -->
    <div class="component__logo">
      <img :src="$withBase('/resource/logo/with-text@2x.png')">
    </div>
    <!-- 介绍卡片 -->
    <div class="component__card columns is-desktop">
      <div class="column">
        <div flex="dir:top main:center cross:center">
          <img :src="$withBase('/resource/page/index/code@2x.png')">
          <p class="component__card-title">开发</p>
          <p class="component__card-info">工具 轮子 参考</p>
        </div>
      </div>
      <div class="column">
        <div flex="dir:top main:center cross:center">
          <img :src="$withBase('/resource/page/index/design@2x.png')">
          <p class="component__card-title">设计</p>
          <p class="component__card-info">图库 素材 社区</p>
        </div>
      </div>
      <div class="column">
        <div flex="dir:top main:center cross:center">
          <img :src="$withBase('/resource/page/index/artical@2x.png')">
          <p class="component__card-title">阅读</p>
          <p class="component__card-info">学习站点 优秀文章</p>
        </div>
      </div>
      <div class="column">
        <div flex="dir:top main:center cross:center">
          <img :src="$withBase('/resource/page/index/github@2x.png')">
          <p class="component__card-title">开源</p>
          <p class="component__card-info">社区人人可分享</p>
        </div>
      </div>
    </div>
    <!-- 群广告 -->
    <div class="component__group-chat">
      <group-chat/>
    </div>
    <!-- footer -->
    <div class="component__footer">
      GPL Licensed | Copyright © 2018-present D2 Projects
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 公用设置
@import '../../style/index';
.component {
  user-select: none;
  .component__logo {
    text-align: center;
    img {
      max-width: 280px;
    }
  }
  .component__card {
    padding: 2.5rem;
    .column {
      img {
        width: 120px;
      }
      .component__card-title {
        color: $color__logo--dark;
        font-size: 1.2em;
        margin: 0px;
        font-weight: bold;
      }
      .component__card-info {
        color: $color__logo--dark;
        font-size: 0.8em;
        margin: 0px;
      }
    }
  }
  .component__group-chat {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
  }
  .component__footer {
    padding: 2.5rem;
    padding-bottom: 0px;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
  }
}
</style>
