<template lang="pug">
  button.btn(
    :class="styleButton",
    :type='typeBtn',
    @click='triggerAction'
  ) {{ labelBtn }}
</template>

<script>
export default {
  props: {
    typeBtn: {
      type: String,
      required: true,
    },
    labelBtn: {
      type: String,
      required: true,
    },
    actionConfirm: Boolean,
    styleBtn: String,
  },

  methods: {
    triggerAction() {
      if (this.actionConfirm) {
        if (confirm('Warning')) {
          this.$emit('buttonActive');
        }
        return;
      }
      this.$emit('buttonActive');
    },
  },

  computed: {
    styleButton() {
      if (this.styleBtn === 'default' || !this.styleBtn) {
        return 'btn-default';
      }
      if (this.styleBtn === 'danger') {
        return 'btn-danger';
      }
    },
  },
};
</script>

<style scoped>
  .btn {
      display: inline-block;
      padding: 10px;
      border-radius: 3px;
      margin: 10px;
      font-size: 1.2em;
  }

  .btn-danger {
      background: rgb(173, 32, 32);
      color: white;
  }

  .btn-default {
      background: rgb(6, 98, 185);
      color: white;
  }
</style>
