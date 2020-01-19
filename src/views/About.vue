<template>
    <Content :theme='theme'>
        <h1 class="content__head">About Me</h1>
              <p class="content__text">The quick brown fox jumps over the lazy dog.
                  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
                  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
          </p>
    </Content>
</template>
<script>
import Component from 'vue-class-component';
import Content from '../components/Content.vue';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    Content,
  }
})
export default class About extends Vue {
  get theme() {
    const route = this.$route.matched.find(record => {
      return record.meta.theme;
    });

    return route?.meta.theme || 'green';
  }
}
</script>
<style scoped>

</style>