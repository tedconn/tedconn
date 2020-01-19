import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      meta: {
        theme: 'green'
    }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            theme: 'blue'
        }
      },
  ],
});
