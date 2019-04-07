<template>
  <div class="body">
    <h1 class="center">{{ title }}</h1>
    <ul class="listPhotos">
      <li class="listPhotosItens" v-for="photo of photos" :key="photo">
        <myPantel :title="photo.titulo">
          <img class="imageResponsive" :src="photo.url" :alt="photo.titulo">
        </myPantel>
      </li>
    </ul>
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
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.photos = fotos, err => console.log(err));
  },
};
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 95%;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.listPhotos {
  list-style: none;
}

.listPhotos .listPhotosItens {
  display: inline-block;
}

.imageResponsive {
  width: 90%;
}
</style>
