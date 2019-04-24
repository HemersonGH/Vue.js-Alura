import Vue from 'vue';
import VueResource from 'vue-resource';
import VeeValidate, { Validator } from 'vee-validate';
import ptBr from 'vee-validate/dist/locale/pt_BR';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './directives/Trasnform';

Vue.use(VueResource);
Validator.localize('pt_BR', ptBr);
Vue.use(VeeValidate, {
  locale: 'pt_BR',
});

Vue.config.productionTip = false;
Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
