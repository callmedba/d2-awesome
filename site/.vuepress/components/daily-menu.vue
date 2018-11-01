<template>
  <article class="component">
    <div class="component__logo" flex="main:center">
      <daily-logo class="component__logo-component"/>
    </div>
    <div class="component__write-start">
      <daily-write-start/>
    </div>
    <aside class="component__menu menu">
      <template v-for="(group, index) in menu">
        <p :key="`label-${index}`" class="menu-label">
          {{group.year}} 年 {{group.mounth}} 月 日报
        </p>
        <ul :key="`list-${index}`" class="menu-list">
          <li v-for="(day, dayIndex) in group.days" :key="dayIndex">
            <a :href="`./post/2018.${group.mounth}.${String(day).padStart(2, '0')}.html`">
              {{group.year}}.{{group.mounth}}.{{String(day).padStart(2, '0')}}
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
@import './style/index.scss';
.component {
  user-select: none;
  .component__logo {
    padding: 4em 0;
    margin-bottom: 2em;
    background-color: $color__logo-daily--main;
    .component__logo-component {
      border: 1px solid #FFF;
    }
  }
  .component__write-start {
    max-width: 400px;
    margin: 0px auto;
    margin-bottom: 2em;
  }
  .component__menu {
    max-width: 400px;
    margin: 0px auto;
    padding: 0px 1em;
    ul {
      list-style: none;
      padding-left: 0px;
      margin: 0px;
    }
  }
}
</style>
