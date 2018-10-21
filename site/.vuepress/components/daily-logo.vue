<template>
  <div class="component" :style="style">
    <h1 v-if="date">{{date}}</h1>
    <!-- <img
      class="component__share-icon"
      :src="$withBase('/resource/component/daily-logo/share-icon@2x.png')"/> -->
    <img
      class="component__text"
      :src="$withBase('/resource/component/daily-logo/text@2x.png')">
    <img
      v-if="date"
      class="component__icon"
      :src="$withBase('/resource/component/daily-logo/icon@2x.png')">
    <span class="component__date">{{date}}</span>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 160
    },
    width: {
      type: Number,
      default: 160
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/index';
.component {
  background: $color__logo-daily--main;
  position: relative;
  border-radius: 2px;
  user-select: none;
  h1 {
    display: none;
  }
  .component__share-icon {
    display: none;
  }
  .component__text {
    position: absolute;
    width: 140px;
    top: 4px;
    left: 4px;
  }
  .component__icon {
    position: absolute;
    width: 18px;
    bottom: 4px;
    left: 4px;
  }
  .component__date {
    position: absolute;
    left: 26px;
    bottom: 4px;
    line-height: 17px;
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
  }
}
</style>
