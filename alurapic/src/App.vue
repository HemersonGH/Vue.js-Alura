<template lang="pug">
  div.body
    Menu(
      :routes='routes'
    )
    transition(name='page')
      router-view
</template>

<script>
import router from '@/router';
import Menu from '@/components/shared/Menu.vue';

export default {
  components: {
    Menu,
  },

  data() {
    return {
      router,
      routes:
      [
        { path: '/', name: 'Home', menu: true },
        { path: '/cadastro', name: 'Cadastro', menu: true },
        { path: '/cadastro/:id', name: 'Altera', menu: false },
        { path: '/about', name: 'About', menu: true },
        { path: '*', menu: false },
      ].filter(route => route.menu),
    };
  },
};
</script>

<style>
  .body {
    font-family: Helvetica, sans-serif;
    width: 95%;
    margin: 0 auto;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity 300ms;
  }
</style>
