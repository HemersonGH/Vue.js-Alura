<template lang="pug">
  div
    h1.center {{ title }}
    input.filter(
      type='search',
      placeholder='Informe o critério de busca',
      @input="filter=$event.target.value"
    )
    .ul.listPhotos
      .li.listPhotosItens(
        v-for="photo of photosWithFilter" :key="photo"
      )
        Panel(
          :title="photo.titulo"
        )
          ImagemResponsiva(
            :url='photo.url',
            :title='photo.titulo'
          )
</template>

<script>
import Panel from '@/components/shared/Panel.vue';
import ImagemResponsiva from '@/components/shared/ImagemResponsiva.vue';

export default {
  components: {
    Panel,
    ImagemResponsiva,
  },
  data() {
    return {
      title: 'Alura Pictures',
      photos: [],
      filter: '',
    };
  },
  computed: {
    photosWithFilter() {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i');

        return this.photos.filter(foto => exp.test(foto.titulo));
      }
      return this.photos;
    },
  },
  created() {
    this.$http
      .get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => (this.photos = fotos), err => console.log(err));
  },
};
</script>

<style scoped>
  .center {
    text-align: center;
  }

  .listPhotos {
    list-style: none;
  }

  .listPhotos .listPhotosItens {
    display: inline-block;
  }

  .filter {
    display: block;
    width: 100%;
  }
</style>
