<template lang="pug">
  div
    h2.center Cadastro
    h2.center {{ photo.title }}
    form(
      @submit.prevent='addPhoto()'
    )
      div.control
        label(
          for='title'
        ) Título:
        input(
          id="title",
          autocomplete="off",
          v-model.lazy='photo.title'
        )
      div.control
        label(
          for='url',
        ) URL:
        input(
          id='url',
          autocomplete='off',
          v-model.lazy='photo.url'
        )
        ImagemResponsiva(
          v-show='photo.url && photo.title',
          :url='photo.url',
          :title='photo.title',
        )
      div.control
        label(
          for="description",
        ) Descrição:
        textarea(
          id='description',
          autocomplete='off',
          v-model.lazy='photo.description'
        )
      div.center
        router-link(
          to='/'
        )
          Botao.btnLeft(
          typeBtn='button',
          labelBtn='Voltar',
        )
        Botao.btnRight(
          typeBtn='submit',
          labelBtn='Gravar',
        )

    </form>

</template>

<script>
import ImagemResponsiva from '@/components/shared/ImagemResponsiva.vue';
import Botao from '@/components/shared/Botao.vue';
import Photo from '@/domain/Photo';

export default {
  components: {
    ImagemResponsiva,
    Botao,
  },

  data() {
    return {
      photo: new Photo(),
    }
  },

  methods: {
    addPhoto() {
      this.$http
        .post('http://localhost:3000/v1/fotos', this.photo)
        .then(() => this.photo = new Photo(), err => console.log(err));
    }
  },
};
</script>

<style scoped>
  .center {
    text-align: center;
  }

  .control {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .btnLeft {
    float: left;
  }

  .btnRight {
    float: right;
  }
</style>
