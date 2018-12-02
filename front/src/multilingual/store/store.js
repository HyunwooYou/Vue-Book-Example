import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

import translationsEn from '../locale/en.js';
import translationsDe from '../locale/de.js';

Vue.use(Vuex);

let state = {
  curLanguage: null,
  languages: [
    {
      short: 'en',
      long: 'English'
    },
    {
      short: 'de',
      long: 'German'
    }
  ]
};

state.curLanguage = state.languages[0];

const mutations = {
  setLanguage(state, lang) {
    state.curLanguage = lang;
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

export default store;
