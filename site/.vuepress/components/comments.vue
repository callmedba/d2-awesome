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
    <p class="comments-visitors">
      <span
        :id="id"
        class="leancloud-visitors"
        :data-flag-title="`d2-daily-${date}`">
        <em class="post-meta-item-text">阅读: </em>
        <i class="leancloud-visitors-count">pending...</i>
      </span>
    </p>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    id () {
      return window.location.pathname
    }
  },
  mounted () {
    new Valine({
      el: '#vcomments',
      appId: 'PRgrWqfjD6bhnahr2Xs6akmW-gzGzoHsz',
      appKey: 'WjVnlLdNGoSvLD6bOqsoDvCB',
      placeholder: '您可以随意评论，也可以在上边附加您的信息后留言',
      avatar: 'retro',
      visitor: true,
      pageSize: 100
    })
  }
}
</script>
