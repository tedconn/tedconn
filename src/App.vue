<template>
  <div id="app">
      <Header />
      <Intro />
      <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Intro,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 672px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 896px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1104px;
    }
  }

  .container {
    position: relative;
    padding: 0 24px;
  }
  @media (min-width: 576px) {
    .container {
      padding: 0;
    }
  }
</style>
