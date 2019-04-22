import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './directives/Trasnform';
import messages from './pt_BR';

Vue.use(VueResource);
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: messages,
    },
  },
});

Vue.config.productionTip = false;
Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
