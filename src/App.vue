<template>
  <div id="app">
    <div class="crossfade">
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
      <figure></figure>
    </div>
    <div id="darkener"></div>
    <AppNav></AppNav>
    <div id="outer-container">
      <div id="inner-container">
        <router-view></router-view>
      </div>
    </div>
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
.crossfade > figure {
  animation: imageAnimation 30s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100%;
  left: 0px;
  opacity: 0;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: -1;
  margin:0 auto;
}
.crossfade > figure:nth-child(1) { 
  background-image: url('./assets/bg-1.png'); 
}
.crossfade > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: url('./assets/bg-2.png');
}
.crossfade > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: url('./assets/bg-3.png');
}
.crossfade > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: url('./assets/bg-4.png');
}
.crossfade > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: url('./assets/bg-5.png');
}
.crossfade > figure:nth-child(6) {
  animation-delay: 30s;
  background-image: url('./assets/bg-6.png');
}
.crossfade > figure:nth-child(7) {
  animation-delay: 36s;
  background-image: url('./assets/bg-7.png');
}
.crossfade > figure:nth-child(8) {
  animation-delay: 42s;
  background-image: url('./assets/bg-8.png');
}
.crossfade > figure:nth-child(9) {
  animation-delay: 48s;
  background-image: url('./assets/bg-9.png');
}
@keyframes imageAnimation {  
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
  }
  8% {
    animation-timing-function: ease-out;
    opacity: 1;
  }
  17% {
    opacity: 1
  }
  25% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

#darkener {
  background: black;
  opacity: .7;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: -1;
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
}
h1 {
  font-size: 32px;
}
h3 {
  font-size: 26px;
}
p, span {
  font-size: 24px;
}

#outer-container {
  top: 0;
  left: 0;
  width: calc(100% - 2 * 8px);
  margin-top: 50px;
  padding: 8px;
}
#inner-container {
  max-width: 800px;
  margin: 0 auto;
}

span.center {
  display: inline-block;
  width: 100%;
  text-align: center;
}

span.red {
  color: #964F4C;
}
</style>
