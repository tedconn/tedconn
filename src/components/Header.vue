<template>
  <header>
    <div class="container">
      <router-link class="header__logo" to="/"></router-link>
      <ul class="header__actionmenu">
        <li class="header__menuaction">
          <a class="button" v-bind:class="theme" href="#">contact me</a>
        </li>
        <li class="header__menuaction">
            <div class="header__hamburger" data-action="js-open-menu" href="#"></div>
        </li>
      </ul>
      <div class="header__menus">
        <ul class="header__mainmenu">
          <li class="header__menuitem">
              <router-link class="header__menulink" to="/about">about me</router-link>
          </li>
          <li class="header__menuitem">
            <a class="header__menulink" href="#">blog</a>
          </li>
        </ul>
        <!--<ul class="header__submenu">
          <li class="header__menuitem">
            <a class="header__menulink" href="#">contact me</a>
          </li>
        </ul>-->
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    theme: String
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 88px;
  z-index: 10;
  transition: all 0.3s ease-in-out;
}

.header__logo {
  width: 180px;
  height: 42px;
  position: absolute;
  left: 20px;
  background-image: url('../assets/logo.svg');
        background-size: cover;
        background-repeat: no-repeat;
  top: 32px;
  z-index: 20;
}
@media (min-width: 576px) {
  .header__logo {
    left: 0;
    width: 180px;
    height: 42px;
    top: 38px;
  }
}
@media (min-width: 768px) {
  .header__logo {
    top: 30px;
  }
}

.header__menus {
  position: relative;
  top: 102px;
  z-index: 20;
  display: none;
}
@media (min-width: 992px) {
  .header__menus {
    display: block !important;
    top: 0;
  }
}

.header__mainmenu {
  z-index: 20;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
@media (min-width: 992px) {
  .header__mainmenu {
    margin-left: 180px;
    position: relative;
    top: 28px;
    float: left;
    display: block;
  }
}

.header__actionmenu {
  float: right;
  margin: 0 20px;
  float: right;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 20;
  top: 20px;
}
@media (min-width: 576px) {
  .header__actionmenu {
    top: 28px;
  }
}
.header__actionmenu .header__menuitem:last-child {
  display: inline-block;
}
@media (min-width: 992px) {
  .header__actionmenu .header__menuitem:last-child {
    display: none;
  }
}

.header__menuitem {
  width: 100%;
  border-bottom: 1px solid #282828;
  background-repeat: no-repeat;
  background-position: center left;
  background-size: 32px 32px;
}
@media (min-width: 992px) {
  .header__menuitem {
    border: 0;
    width: auto;
    line-height: 48px;
    list-style-type: none;
    display: inline-block;
    margin-left: 16px;
    margin-left: 36px;
  }
}

.header__menuaction {
  line-height: 48px;
  list-style-type: none;
  display: inline-block;
  margin-left: 16px;
}
@media (min-width: 576px) {
  .header__menuaction {
    margin-left: 36px;
  }
}
@media (min-width: 992px) {
  .header__menuaction:last-child {
    display: none;
  }
}

.button {
  display: inline-block;
  background-color: #282828;
  color: white;
  font-size: 22px;
  font-weight: 500;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
  padding: 0 36px;
  border: 0;
  cursor: pointer;
  position: relative;
}
@media (min-width: 576px) {
  .button {
    padding: 0 46px;
  }
}
.button:hover {
  text-decoration: none;
  color: white;
  box-shadow: none;
}
.button.green {
  color: #282828;
  background-color: #06e0a5;
}
.button.green:hover {
  color: #282828;
}

.button.blue {
  color: #282828;
  background-color: #75b6f9;
}
.button.blue:hover {
  color: #282828;
}

.header__menulink {
  color: #282828;
  font-size: 22px;
  font-weight: 500;
  display: block;
  transition: color 0.2s;
  padding: 20px 0;
  background-image: url("/images/arrow-right.svg");
  background-repeat: no-repeat;
  background-position: center right 5px;
  padding-left: 48px;
}
@media (min-width: 992px) {
  .header__menulink {
    padding-left: 0;
    background: none;
    padding: 0;
  }
}
.header__menulink:hover {
  text-decoration: none;
  color: #75d4ff;
}
@media (min-width: 992px) {
  .header__menulink:hover {
    color: #282828;
    border-bottom: 2px solid #282828;
  }
}

.header__submenu {
  z-index: 20;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
@media (min-width: 992px) {
  .header__submenu .header__menuitem {
    margin: 0 20px;
    padding: 0;
    margin: 0;
    position: relative;
    top: 28px;
    float: right;
    display: inline-block;
  }
}
</style>
