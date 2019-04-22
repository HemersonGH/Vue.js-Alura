import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './directives/Trasnform';

Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
