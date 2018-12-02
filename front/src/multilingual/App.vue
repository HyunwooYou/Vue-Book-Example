<template>
  <div id="app">
    <div class="wrapper">
      <my-header></my-header>

      <img width="200" src="./assets/logo.png">
      <h1>{{ 'My nice title' | translate }}</h1>
      <!--<p>{{ $t('my.content', {'type': 'nice'}) }}</p>-->
      <p>{{ 'my.content' | translate }}</p>
      <select v-model="selectedLanguage">
        <option v-for="lang in languages" :value="lang">{{ lang.long }}</option>
      </select>
      {{ selectedLanguage }}

      <!--<br/><br/>-->
      <div class="_custom2">Themed Text</div>

      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Vue from 'vue';

  import MyHeader from '../common/components/layout/MyHeader.vue';
  import MyFooter from '../common/components/layout/MyFooter.vue';

  export default {
    name: 'app',
    components: { MyHeader, MyFooter },
    data () {
      return {
        selectedLanguage: this.$store.state.curLanguage
      }
    },
    created () {
      Vue.i18n.set(this.$store.state.curLanguage.short);
    },
    computed: mapState(['languages']),
    watch: {
      'selectedLanguage': function(newLang) {
        Vue.i18n.set(newLang.short);
        this.$store.commit('setLanguage', newLang.short);
      }
    }
  }
</script>

<style lang="scss">
  // import _theme.scss globally
  // The property in _theme.scss are declared like [ _sample ].
  @import "../common/style/_theme.scss";

  #app {
    text-align: center;
    color: #2c3e50;

    .wrapper {
      min-height: 100%;
      position: relative;
    }
  }
</style>
