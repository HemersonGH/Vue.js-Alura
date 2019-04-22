<template lang="pug">
  div
    h1.center {{ title }}
    input.filter(
      type='search',
      placeholder='Informe o critério de busca',
      @input="filter=$event.target.value"
    )
    ul.listPhotos
      li.listPhotosItens(
        v-for="photo of photosWithFilter" :key="photo"
      )
        Panel(
          :title="photo.title"
        )
          ImagemResponsiva(
            :url='photo.url',
            :title='photo.title',
            v-my-Transform:scale.animate='1.2'
          )
          Botao(
            typeBtn='button',
            labelBtn='Delete',
            @buttonActive='remove(photo)',
            :actionConfirm='true',
            styleBtn='danger'
          )
</template>

<script>
import Panel from '@/components/shared/Panel.vue';
import ImagemResponsiva from '@/components/shared/ImagemResponsiva.vue';
import Botao from '@/components/shared/Botao.vue';
// import transform from '@/directives/Transform';

export default {
  components: {
    Panel,
    ImagemResponsiva,
    Botao,
  },

  // directives: {
  //   Transform,
  // },

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

        return this.photos.filter(foto => exp.test(foto.title));
      }
      return this.photos;
    },
  },

  methods: {
    remove(photo) {
      alert('Are you sure you want to delete ' + photo.title + '?');
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
