<template>
  <div>
    <h1> {{ title }} </h1>

    <li v-for="photo of photos" :key="photo">
      <img :src="photo.url" :alt="photo.title">
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alura Pictures',
      photos: [],
    };
  },
  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

    promise
      .then(res => res.json())
      .then(fotos => this.photos = fotos, err => console.log(err));
  },
};
</script>

<style>

</style>
