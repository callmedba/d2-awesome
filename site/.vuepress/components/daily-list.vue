<template>
  <article class="component">
    <section class="component__logo" flex="main:center">
      <daily-logo :date="date"/>
    </section>
    <section v-for="(group, index) in list" :key="index">
      <h2>{{group.name}}</h2>
      <ul>
        <li v-for="(item, itemIndex) in group.list" :key="itemIndex">
          <p class="component__item-title">
            <span>{{item.name}}</span>
            <!-- VPN -->
            <span
              v-if="item.vpn"
              class="hint--bottom hint--small hint--rounded"
              aria-label="科学上网">
              <i class="fas fa-globe-asia" style="color: #F56C6C;"></i>
            </span>
            <!-- video -->
            <span 
              v-if="item.video"
              class="hint--bottom hint--small hint--rounded"
              aria-label="视频资源">
              <i class="fab fa-youtube" style="color: #67C23A;"></i>
            </span>            
          </p>
          <p v-if="item.note" class="component__item-note">
            <span>{{item.note}}</span>
          </p>
          <p class="component__item-link">
            传送门 
            <a :href="item.url" target="_blank">
              <span
                class="hint--bottom hint--medium hint--rounded"
                :aria-label="item.url">
                {{urlSimplify(item.url)}}
                <i class="fas fa-external-link-square-alt"></i>
              </span>
            </a>
          </p>
        </li>
      </ul>
    </section>
    <br>
    <comments :title="`d2-daily-${date}`"/>
    <br>
    <daily-editor/>
    <br>
    <daily-partner/>
    <br>
    <section class="component__qr" flex="dir:top main:center cross:center">
      <qr :text="`https://awesome.fairyever.com/daily/post/${date}.html`"/>
      <p>本页二维码</p>
    </section>
  </article>
</template>

<script>
import url from 'url'
export default {
  props: {
    date: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    urlSimplify (u) {
      return url.parse(u).host
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/index';
.component {
  user-select: none;
  .component__logo {
    margin-bottom: 2em;
  }
  section {
    h2 {
      color: $color__logo--dark;
      border-bottom: none;
      border-left: 0.3em solid $color__logo-daily--main;
      padding-left: 0.6em;
    }
    ul {
      list-style: none;
      margin: 0px;
      margin-bottom: 1em;
      li {
        margin: 0px;
        margin-bottom: 1em;
        padding: 0.6em 1em;
        border-radius: 4px;
        &:hover {
          background-color: $color__logo-daily__main-item--hover;
        }
        p {
          margin: 0px;
        }
        .component__item-title {
          font-weight: bold;
          font-size: 16px;
        }
        .component__item-note {
          font-size: 14px;
        }
        .component__item-link {
          font-size: 14px;
          a {
            padding: 0.2em;
          }
        }
      }
    }
  }
  .component__qr {
    p {
      margin-top: 10px;
    }
  }
}
</style>
