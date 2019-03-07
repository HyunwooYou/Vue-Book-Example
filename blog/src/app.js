import Vue from 'vue';
import App from './App.vue';
import router from './hwBlog/router';

new Vue({
  el: '#app',
  router,
  created() {
    const route = window.location.pathname.split('/');
    const param = route[route.length - 1];

    console.log('route: ' + route);
    console.log('param: ' + param);

    this.$router.push('/' + param);
  },
  render: h => h(App)
})
