<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        主要参与人员
      </div>
    </div>
    <div class="card-content">
      <a
        v-for="(item, index) in value"
        :key="index"
        :href="item.url"
        class="button is-small daily-editor-link">
        <span class="icon is-small">
          <i :class="`fab fa-${item.icon || 'github'}`"></i>
        </span>
        <span>{{item.name}}</span>
      </a>
    </div>
  </div>
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

<style lang="scss" scoped>
.daily-editor-link {
  margin-right: 4px;
}
</style>
