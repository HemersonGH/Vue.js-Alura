<template lang="pug">
  .panel
    h2.panelTitle(@click="visible = !visible") {{ title }}
    transition(name='panel-fade')
      .div.panelContent(v-show="visible")
        slot
</template>

<script>
export default {
  props: ['title'],

  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style scoped>
  .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel .panelTitle {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 5px;
  }

  .panel-fade-enter, .panel-fade-leave-active {
    opacity: 0;
  }

  .panel-fade-enter-active, .panel-fade-leave-active {
    transition: opacity 400ms;
  }
</style>
