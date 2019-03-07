import Vue from 'vue';
import App from './App.vue';
import router from './hwBlog/router';

new Vue({
  el: '#app',
  router,
  created() {
    const route = window.location.pathname.split('?');
    if(route.length > 1) {
      this.$router.push(route[0] + '/' + route[1]);
    }    
  },
  render: h => h(App)
})
