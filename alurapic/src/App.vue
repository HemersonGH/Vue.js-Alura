<template>
  <div>
    <h1> {{ title }} </h1>

    <li v-for="photo of photos" :key="photo">
      <img :src="photo.url" :alt="photo.title" height="400" width="600">
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alura Pic',
      photos: [
        {
          url: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
          title: 'Cat',
        },
        {
          url: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
          title: 'Cat',
        },
      ],
    };
  },
};
</script>

<style>

</style>
