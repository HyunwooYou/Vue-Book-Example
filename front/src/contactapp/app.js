import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
require('es6-promise').polyfill();

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
