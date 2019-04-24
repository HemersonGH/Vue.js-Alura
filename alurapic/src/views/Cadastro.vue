<template lang="pug">
  div
    h2.center(
      v-if='!id'
    ) Cadastro
    h2.center(
      v-else
    ) Alterando: {{ photo.title }}
    h2.center
    form(
      @submit.prevent='addPhoto()'
    )
      div.control
        label(
          for='title'
        ) Título: *
        input(
          id="title",
          name="title",
          data-vv-as='Título',
          autocomplete="off",
          v-model.lazy='photo.title',
          v-validate,
          data-vv-rules='required|min:3|max:50'
        )
        span.error(
          v-show="errors.has('title')"
        ) {{ errors.first('title') }}
      div.control
        label(
          for='url',
        ) URL: *
        input(
          id='url',
          name='url',
          data-vv-as='URL',
          autocomplete='off',
          v-model.lazy='photo.url',
          v-validate,
          data-vv-rules='required|min:3|max:1000'
        )
        span.error(
          v-show="errors.has('url')"
        ) {{ errors.first('url') }}
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
          :to={name: 'Home'}
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
import Photo from '@/domain/photo/Photo';
import PhotoService from '@/domain/photo/PhotoService';

export default {
  components: {
    ImagemResponsiva,
    Botao,
  },

  data() {
    return {
      photo: new Photo(),
      id: this.$route.params.id,
    };
  },

  methods: {
    addPhoto() {
      this.$validator
        .validateAll()
        .then(sucess => {
          if (sucess) {
            this.service
              .add(this.photo)
              .then(() => {
                if (this.id) this.$router.push({ name: 'Home'});
                this.photo = new Photo();
              }, err => console.log(err));
          }
        });
    },
  },

  created() {
    this.service = new PhotoService(this.$resource);

    if (this.id) {
      this.service
        .search(this.id)
        .then(photo => this.photo = photo);
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

  .error {
    color: red;
  }
</style>
