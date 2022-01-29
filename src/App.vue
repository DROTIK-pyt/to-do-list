<template>
  <div id="app">
    <Menus :list="list" :classMenu="classList"/>
    <router-view/>
  </div>
</template>

<script>
import Menus from './components/Menus'

export default {
  data() {
    return {
      list: [
        {
          class: 'nav-item',
          href: '/',
          text: 'Главная'
        },
        {
          class: 'nav-item',
          href: '/about',
          text: 'О чем речь?'
        },
        {
          class: 'nav-item',
          href: '/FAQ',
          text: 'ЧаВо'
        },
        {
          class: 'nav-item',
          href: '/Tasks',
          text: 'Задачи'
        }
      ],
      classList: 'nav menu-nav'
    }
  },
  components: {
    Menus
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
