<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">贡献者</div>
    </div>
    <div class="card-content">
      <span
        v-for="(item, index) in value"
        :key="index"
        class="hint--bottom hint--small hint--rounded"
        :aria-label="item.contribution">
        <a
          :href="item.url"
          target="_blank"
          class="button is-small daily-editor-link">
          <span class="icon is-small">
            <i :class="`fab fa-${item.icon || 'github'}`"></i>
          </span>
          <span>{{item.name}}</span>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [
        {
          name: 'FairyEver',
          url: 'https://github.com/FairyEver',
          contribution: '发起'
        },
        {
          name: 'ishenyi',
          url: 'https://github.com/ishenyi',
          contribution: '工具'
        },
        {
          name: '521xueweihan',
          url: 'https://github.com/521xueweihan',
          contribution: '工具'
        },
        {
          name: 'sunhaoxiang',
          url: 'https://github.com/sunhaoxiang',
          contribution: '分享'
        },
        {
          name: 'Jiiiiiin',
          url: 'https://github.com/Jiiiiiin',
          contribution: '分享'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-editor-link {
  margin-right: 4px;
}
</style>
