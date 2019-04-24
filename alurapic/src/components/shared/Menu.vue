<template lang="pug">
  div
    nav
      ul
        li(
          v-for='(route, index) in rotas'
        )
          router-link(:to='route.path') {{ route.name }}
</template>

<script>
import router from '@/router';

export default {
  computed: {
    rotas() {
      return router.options.routes.filter(route => route.menu);
    },
  },
};
</script>

<style scoped>

</style>/
