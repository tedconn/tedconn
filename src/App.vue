<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer

  }
};
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

@font-face {
  font-family: "Gelion";
  font-display: block;
  src: local("Gelion-Black"), url("./assets/fonts/Gelion-Black.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Gelion";
  font-display: block;
  src: local("Gelion-Medium"), url("./assets/fonts/Gelion-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Gelion";
  font-display: block;
  src: local("Gelion-Regular"), url("./assets/fonts/Gelion-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Gelion";
  font-display: block;
  src: local("Gelion-Bold"), url("./assets/fonts/Gelion-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
}
</style>
