<template>
  <section class="intro">
      <div class="container">
          <div class="intro__wrap">
              <h1 class="intro__head">Hello</h1>
              <p class="intro__text">The quick brown fox jumps over the lazy dog.
              The quick brown fox jumps over the lazy dog.
              The quick brown fox jumps over the lazy dog.
              The quick brown fox jumps over the lazy dog.
              The quick brown fox jumps over the lazy dog.
          </p>
          </div>
      </div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Intro extends Vue {}
</script>

<style scoped>
.intro {
  background-color: #9bf3db;
  background-image: url("../assets/map.svg");
  background-repeat: no-repeat;
  padding: 140px 0 68px 0;
  background-position: right 0px top -160px;
  background-size: 160%;
}
@media (min-width: 576px) {
  .intro {
    background-size: 110%;
  }
  .info .intro {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 768px) {
  .intro {
    background-position: right -220px bottom;
    padding: 200px 0 124px 0;
    background-size: auto;
  }
  .info .intro {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 992px) {
  .intro {
    padding: 242px 0 312px 0;
    background-position: right -160px top;
  }
  .info .intro {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 1200px) {
  .intro {
    background-position: right top;
  }
}
@media (min-width: 768px) {
  .intro__wrap {
    width: 320px;
  }
}
@media (min-width: 992px) {
  .intro__wrap {
    width: 448px;
  }
}
@media (min-width: 1200px) {
  .intro__wrap {
    width: 560px;
  }
}
.intro__head {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.14;
  margin-bottom: 24px;
  width: 180px;
}
@media (min-width: 768px) {
  .intro__head {
    width: 100%;
    font-size: 56px;
  }
}
@media (min-width: 992px) {
  .intro__head {
    width: 300px;
  }
}
@media (min-width: 1200px) {
  .intro__head {
    width: 100%;
  }
}
.intro__text {
  font-size: 18px;
  margin-bottom: 0;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .intro__text {
    font-size: 20px;
  }
}
</style>
