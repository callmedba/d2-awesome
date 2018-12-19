<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">合作</div>
    </div>
    <div class="card-content">
      <a
        href="https://juejin.im"
        target="_blank"
        class="button is-large daily-partner--button">
        <img
          class="daily-partner--logo"
          :src="$withBase('/resource/component/daily-partner/juejin.png')">
      </a>
      <a
        href="https://github.com/521xueweihan"
        target="_blank"
        class="button is-large daily-partner--button">
        <img
          class="daily-partner--logo"
          :src="$withBase('/resource/component/daily-partner/hello-github.png')">
      </a>
      <a
        href="https://alibaba.github.io/ice"
        target="_blank"
        class="button is-large daily-partner--button">
        <img
          class="daily-partner--logo"
          :src="$withBase('/resource/component/daily-partner/ice.png')">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.daily-partner--logo {
  height: 40px;
}
.daily-partner--button {
  padding-left: .4em;
  padding-right: .4em;
}
</style>
