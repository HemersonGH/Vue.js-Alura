<template lang="pug">
  div
    h1.center {{ title }}
    p.center(
      v-show='message'
    ) {{ message }}
    input.filter(
      type='search',
      placeholder='Informe o critério de busca',
      @input="filter=$event.target.value"
    )
    ul.listPhotos
      li.listPhotosItens(
        v-for='photo of photosWithFilter' :key='photo._id'
      )
        Panel(
          :title="photo.title"
        )
          ImagemResponsiva(
            :url='photo.url',
            :title='photo.title',
            v-my-Transform:scale.animate='1.2'
          )
          router-link(
            :to="{ name: 'Altera', params: { id: photo._id,} }"
          )
            Botao(
              typeBtn='button',
              labelBtn='Edit',
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
import PhotoService from '@/domain/photo/PhotoService';

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
      message: '',
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
      this.service
        .delete(photo._id)
        .then(
          () => {
            let index = this.photos.indexOf(photo);
            this.photos.splice(index, 1);
            this.message = 'Foto removida com sucesso'
          },
          err => this.message = err.message
        );
    },
  },

  created() {
    this.service = new PhotoService(this.$resource);

    this.service
      .list()
      .then(
        fotos => this.photos = fotos, 
        err => {
          console.log(err);
          this.message = err.message;
        }
      );
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
