<template>
    <Content :theme='theme'>
        <h1 class="content__head">Hello</h1>
              <p class="content__text">I'm a software developer at Salesforce where I
                  work on Communities, Experiences and Sites. I've been passionate about website
development for over 20 years and my upcoming blog will mostly be about that.
                  Thanks for stopping by!
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
    Content
  }
})
export default class Home extends Vue {
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
