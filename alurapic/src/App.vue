<template lang="pug">
  div.body
    Menu
    transition(name='page')
      router-view
</template>

<script>
import Menu from '@/components/shared/Menu.vue';

export default {
  components: {
    Menu,
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
