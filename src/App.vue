<template>
  <div id="app">
    <Crossfade></Crossfade>
    <AppNav></AppNav>
    <div id="outer-container">
      <div id="inner-container">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import Crossfade from './components/Crossfade.vue'

export default {
  name: 'app',
  components: {
    AppNav,
    Crossfade
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .1s;
}

.fade-enter-active {
  transition-delay: .1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


html {
  overflow-y: scroll;
}

#app {
  font-family: 'Rancho', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;
  margin-top: 50px;
}
body {
  margin: 0 auto;
  background: gray;
}
h1 {
  font-size: 32px;
}
h3 {
  font-size: 26px;
}
p {
  font-size: 26px;
}
li {
  font-size: 26px;
}

#outer-container {
  top: 0;
  left: 0;
  width: calc(100% - 2 * 8px);
  margin-top: 70px;
  padding: 8px;
}
#inner-container {
  max-width: 800px;
  margin: 0 auto;
}

.first-line {
  margin-top: 0;
}

span.center {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 4px 0px 4px 0px;
}

span.red {
  color: #7D3A38;
  color: #D9534F;
  text-shadow: 0 0 3px black;
}

form * {
  -ms-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
}
</style>
