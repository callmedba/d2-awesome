<template>
  <nav class="panel">
    <p class="panel-heading" style="margin-bottom: 0px;">参与编辑</p>
    <!-- 参与者列表 -->
    <a
      v-for="(item, index) in value"
      :key="index"
      :href="item.url"
      class="panel-block">
      <span class="panel-icon">
        <i class="fab" :class="`fa-${item.icon || 'github'}`" aria-hidden="true"></i>
      </span>
      {{item.name}}
    </a>
    <!-- 参与分享的按钮 -->
    <div class="panel-block">
      <daily-write-start class="button is-link is-outlined is-fullwidth"/>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [
        // eg:
        // {
        //   name: 'FairyEver',
        //   url: 'https://github.com/FairyEver',
        //   icon: 'github'
        // }
      ]
    }
  }
}
</script>

