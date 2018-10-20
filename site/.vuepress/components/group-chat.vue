<template>
  <div class="component">
    <img :src="$withBase('/resource/component/group-chat/title-qq@2x.png')">
    <a class="button is-success is-rounded">微信加群方式</a>
  </div>
</template>

<style lang="scss" scoped>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 320px;
    margin-bottom: 10px;
  }
  .button {
    text-decoration: none;
  }
}
</style>
