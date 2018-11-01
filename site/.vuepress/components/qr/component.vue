<template>
  <div :style="style"/>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'https://awesome.fairyever.com'
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    colorDark: {
      type: String,
      default: '#35485E'
    },
    colorLight: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    }
  },
  mounted () {
    new window.QRCode(this.$el, {
      ...this.$props,
      height: this.height * 2,
      width: this.width * 2
    })
  }
}
</script>
