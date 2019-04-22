import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cadastro from './views/Cadastro.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      menu: true,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
      menu: true,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      menu: true,
    },
    {
      path: '*',
      component: Home,
      menu: false,
    },
  ],
});
