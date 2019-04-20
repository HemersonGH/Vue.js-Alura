<template lang="pug">
  img.imageResponsive(
    :src='url',
    :alt='title'
  )
</template>

<script>
export default {
  props: ['url', 'title'],
};
</script>

<style scoped>
  .imageResponsive {
    width: 100%;
  }
</style>
