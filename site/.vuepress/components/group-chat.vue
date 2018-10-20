<template>
  <div class="component">
    <div flex="dir:top main:center cross:center">
      <img class="component__cover" :src="$withBase('/resource/component/group-chat/title-qq@2x.png')">
      <button
        class="button is-success is-rounded"
        @click="modal.active = true">
        微信加群方式
      </button>
    </div>
    <div
      class="modal"
      :class="{ 'is-active': modal.active }">
      <div
        class="modal-background"
        @click="modal.active = false"/>
      <div class="modal-content">
        <div class="component__modal-content" flex="dir:top main:center cross:center">
          <p>由于微信群加入规则限制，请扫描下方二维码加管理员微信好友入群。</p>
          <img class="we" :src="$withBase('/resource/component/group-chat/qr-we@2x.png')">
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="modal.active = false"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: {
        active: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.component {
  .component__cover {
    max-width: 200px;
    margin-bottom: 10px;
  }
  .component__modal-content {
    background: #FFF;
    padding: 2em;
    border-radius: 4px;
    .we {
      width: 162px;
    }
  }
}
</style>
