import Vue from 'vue';
import App from './App.vue';
import router from './hwBlog/router';

new Vue({
  el: '#app',
  router,
  created() {
    const path = window.location.href.split('/');    
    this.$router.push('/' + path[path.length - 1]);
  },
  render: h => h(App)
})
