<template>
  <footer class="footer">
    <div class="container">
      <a href="#" class="footer__logo"></a>
      <div class="footer__socials">
        <a
          class="footer__social footer__social--twitter"
          href="http://twitter.com/citizenconn"
          target="_blank"
        ></a>
      </div>
    </div>
    <div class="container links">
      <a href="#" target="_blank">Terms&nbsp;&amp;&nbsp;Conditions</a> |
      <a href="#" target="_blank">Privacy&nbsp;Policy</a> |
      <a href="#" target="_blank">Cookie&nbsp;Notice</a> |
      <a href="#" target="_blank">FAQ</a>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  background-color: #282828;
}

.footer > .container {
  height: 86px;
}
@media (min-width: 768px) {
  .footer > .container {
    height: 100px;
  }
}
.footer > .container.links {
  color: #fff;
}
.footer > .container.links > a {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.footer__logo {
  float: left;
  width: 60px;
  height: 20px;
  background-image: url("/images/dott-logo-white.svg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  top: 33px;
}
@media (min-width: 768px) {
  .footer__logo {
    top: 40px;
  }
}
</style>
