import Vue from 'vue';
import App from './App.vue';
import router from './hwBlog/router';

new Vue({
  el: '#app',
  router,
  created() {
    this.$router.push(window.location.pathname);
  },
  render: h => h(App)
})
