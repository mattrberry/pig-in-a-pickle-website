<template>
  <div id="app">
    <AppNav></AppNav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  name: 'app',
  components: {
    AppNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rancho');
#app {
  font-family: 'Rancho', cursive;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
