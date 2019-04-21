<template lang="pug">
  div
    nav
      ul
        li(
          v-for='route in routes'
        )
          router-link(:to='route.path') {{ route.name }}
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
