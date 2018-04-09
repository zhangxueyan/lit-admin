<template>
  <div id="app">
    <v-header></v-header>
    <v-slider></v-slider>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/Header'
import vSlider from './components/Slider'
export default {
  components:{
    vHeader,
    vSlider
  }
}
</script>

<style>
@import "./assets/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
