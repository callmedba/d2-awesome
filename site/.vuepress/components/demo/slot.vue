<template>
  <div class="component">
    <b>这是组件里的内容</b>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.component {
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
