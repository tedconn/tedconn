<template>
  <footer class="footer">
    <div class="container">
      <a href="#" class="footer__logo"></a>
      <div class="footer__socials">
        <a class="footer__social footer__social--twitter"
          href="http://twitter.com/citizenconn"
          target="_blank"
          rel="noopener"></a>
        <a class="footer__social footer__social--instagram"
          href="https://www.instagram.com/wereinthistogethernow/"
          target="_blank"
          rel="noopener"></a>
        <a class="footer__social footer__social--linkedin"
          href="https://www.linkedin.com/in/tedconn/"
          target="_blank"
          rel="noopener"></a>
      </div>
    </div>
    <div class="container links">
      Copyright © 2019-2020 |
      <a href="#" target="_blank">Disclaimer</a>
      <!--<a href="#" target="_blank">Cookie&nbsp;Notice</a> |
      <a href="#" target="_blank">FAQ</a>-->
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
  width: 120px;
  height: 30px;
  background-image: url("../assets/logo-white.svg");
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

.footer__socials {
  padding: 0;
  margin: 0;
  float: right;
  position: relative;
  top: 31px;
}
@media (min-width: 768px) {
  .footer__socials {
    top: 39px;
  }
}
.footer__social {
  display: inline-block;
  height: 18px;
  width: 18px;
  margin-left: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}

.footer__social--twitter {
  background-image: url('../assets/social-twitter.svg');
  height: 22px;
  width: 22px;
  position: relative;
  top: 5px;
}
.footer__social--instagram {
  background-image: url('../assets/social-instagram.svg');
}
.footer__social--linkedin {
  background-image: url('../assets/social-linkedin.svg');
}

</style>
