<template>
    <section class="content" v-bind:class="theme">
      <div class="container">
          <div class="content__wrap">
            <slot></slot>
          </div>
      </div>
    </section>
</template>

<script lang="ts">
export default {
    props: {
      theme: String
    }
}
</script>

<style scoped>
.content {
  background-repeat: no-repeat;
  padding: 140px 0 68px 0;
  background-position: right 0px top -160px;
  background-size: 160%;
}

.content.green {
  background-color: #9bf3db;
  background-image: url("../assets/map.svg");
}

.content.blue {
  background-color: #75d4ff;
}

@media (min-width: 576px) {
  .content {
    background-size: 110%;
  }
  .info .content {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 768px) {
  .content {
    background-position: right -220px bottom;
    padding: 200px 0 124px 0;
    background-size: auto;
  }
  .info .content {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 992px) {
  .content {
    padding: 242px 0 312px 0;
    background-position: right -160px top;
  }
  .info .content {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 1200px) {
  .content {
    background-position: right top;
  }
}
@media (min-width: 768px) {
  .content__wrap {
    width: 320px;
  }
}
@media (min-width: 992px) {
  .content__wrap {
    width: 448px;
  }
}
@media (min-width: 1200px) {
  .content__wrap {
    width: 560px;
  }
}

.content__head {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.14;
  margin-bottom: 24px;
  width: 180px;
}
@media (min-width: 768px) {
  .content__head {
    width: 100%;
    font-size: 56px;
  }
}
@media (min-width: 992px) {
  .content__head {
    width: 300px;
  }
}
@media (min-width: 1200px) {
  .content__head {
    width: 100%;
  }
}
.content__text {
  font-size: 18px;
  margin-bottom: 0;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .content__text {
    font-size: 20px;
  }
}
</style>