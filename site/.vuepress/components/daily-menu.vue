<template>
  <article class="component">
    <div flex="main:center">
      <daily-logo/>
    </div>
    <aside class="menu">
      <template v-for="(group, index) in menu">
        <p :key="`label-${index}`" class="menu-label">
          {{group.year}} 年 {{group.mounth}} 月
        </p>
        <ul :key="`list-${index}`" class="menu-list">
          <li v-for="(day, dayIndex) in group.days" :key="dayIndex">
            <a :href="`./post/2018.${group.mounth}.${day}.html`">
              {{group.year}}.{{group.mounth}}.{{day}}
            </a>
          </li>
        </ul>
      </template>
    </aside>
  </article>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.component {
  ul {
    list-style: none;
    padding-left: 0px;
    margin: 0px;
  }
}
</style>
