<style lang="scss">
.comments-visitors {
  text-align: right;
}
#vcomments {
  .info {
    display: none;
  }
}
</style>

<template>
  <div>
    <p v-if="visitor" class="comments-visitors">
      <span
        :id="pathname"
        class="leancloud-visitors"
        :data-flag-title="title">
        <em class="post-meta-item-text">{{visitorTitle}}: </em>
        <i class="leancloud-visitors-count">pending...</i>
      </span>
    </p>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    visitor: {
      type: Boolean,
      default: true
    },
    visitorTitle: {
      type: String,
      default: '访客'
    }
  },
  data () {
    return {
      pathname: ''
    }
  },
  mounted () {
    this.updateId()
    this.$nextTick(() => {
      this.initValine()
    })
  },
  methods: {
    // 获取标记当前页面的 id 统计访问次数使用
    updateId () {
      this.pathname = window.location.pathname
    },
    // 初始化评论框
    initValine () {
      new Valine({
        el: '#vcomments',
        appId: 'PRgrWqfjD6bhnahr2Xs6akmW-gzGzoHsz',
        appKey: 'WjVnlLdNGoSvLD6bOqsoDvCB',
        placeholder: '您可以随意评论，也可以在上边附加您的信息后留言',
        avatar: 'retro',
        visitor: this.visitor,
        pageSize: 100
      })
    }
  }
}
</script>
