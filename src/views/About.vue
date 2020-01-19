<template>
    <section class="about">
      <div class="container">
          <div class="about__wrap">
              <h1 class="about__head">About Me</h1>
              <p class="about__text">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. 
                  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. 
                  The quick brown fox jumps over the lazy dog. 
                  
          </p>
          </div>
      </div>
    </section>
</template>
<script lang="ts">
export default {
    
};
</script>
<style scoped>
.about {
  background-color: #75d4ff;
  padding: 140px 0 68px 0;
}
@media (min-width: 576px) {
  .about {
    background-size: 110%;
  }
  .info .about {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 768px) {
  .about {
    background-position: right -220px bottom;
    padding: 200px 0 124px 0;
    background-size: auto;
  }
  .info .about {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 992px) {
  .about {
    padding: 242px 0 312px 0;
    background-position: right -160px top;
  }
  .info .about {
    padding: 140px 0 68px 0;
  }
}
@media (min-width: 1200px) {
  .about {
    background-position: right top;
  }
}

@media (min-width: 768px) {
  .about__wrap {
    width: 320px;
  }
}
@media (min-width: 992px) {
  .about__wrap {
    width: 448px;
  }
}
@media (min-width: 1200px) {
  .about__wrap {
    width: 560px;
  }
}
.about__head {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.14;
  margin-bottom: 24px;
  width: 180px;
}
@media (min-width: 768px) {
  .about__head {
    width: 100%;
    font-size: 56px;
  }
}
@media (min-width: 992px) {
  .about__head {
    width: 300px;
  }
}
@media (min-width: 1200px) {
  .about__head {
    width: 100%;
  }
}
.about__text {
  font-size: 18px;
  margin-bottom: 0;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .about__text {
    font-size: 20px;
  }
}
</style>
