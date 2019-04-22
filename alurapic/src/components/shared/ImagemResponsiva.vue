<template lang="pug">
  img.imageResponsive(
    :src='url',
    :alt='title'
  )
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  }
};
</script>

<style scoped>
  .imageResponsive {
    width: 100%;
  }
</style>
