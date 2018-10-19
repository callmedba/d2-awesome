<template>
  <div class="component">
    <div class="component__logo-content">
      <slot name="logo"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component {
  user-select: none;
  .component__logo-content {
    text-align: center;
    img {
      max-width: 280px;
    }
  }
}
</style>
