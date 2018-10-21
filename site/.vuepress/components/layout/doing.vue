<template>
  <div
    class="component"
    flex="dir:top main:center cross:center">
    <img
      class="component_cover"
      :src="$withBase('/resource/page/doing/cover@2x.png')">
    <p>功能正在开发 ...</p>
    <a
      class="button is-rounded"
      :href="$withBase('/')">
      返回首页
    </a>
  </div>
</template>

<style lang="scss" scoped>
.component {
  height: 100vh;
  .component_cover {
    width: 200px;
  }
  p {
    margin-bottom: 1em;
  }
}
</style>
