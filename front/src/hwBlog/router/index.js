import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home.vue';

import HtmlIndex from '../tech/html/HtmlIndex.vue';

import JsIndex from '../tech/js/JsIndex.vue';

import ScssIndex from '../tech/scss/ScssIndex.vue';

import VueIndex from '../tech/vue/VueIndex.vue';

import WebpackIndex from '../tech/webpack/WebpackIndex.vue';

Vue.use(Router);

// server base url
const BASE_URL = '/Vue-Book-Example/front/src/hwBlog';
// const BASE_URL = '/src/hwBlog/';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: BASE_URL,
			component: Home,
      // redirect: '/src/hwBlog/Home'
    },
    {
      path: BASE_URL + '/html',
			component: HtmlIndex,
    },
    {
      path: BASE_URL + '/js',
			component: JsIndex,
    },
    {
      path: BASE_URL + '/scss',
			component: ScssIndex,
    },
    {
      path: BASE_URL + '/vue',
			component: VueIndex,
    },
    {
      path: BASE_URL + '/webpack',
			component: WebpackIndex,
    },
  ]
});
