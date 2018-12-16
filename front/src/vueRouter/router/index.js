import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Goodbye from '../components/Goodbye.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: Hello,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/goodbye',
      component: Goodbye,
      props: (route) => ({ name: route.query.name })
    }
  ]
});
