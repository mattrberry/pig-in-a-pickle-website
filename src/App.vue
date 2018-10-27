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
    <ChowNowButton v-if="$route.path != '/catering'"></ChowNowButton>
    <!-- <ChowNow></ChowNow> -->
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import Crossfade from './components/Crossfade.vue'
import ChowNow from './components/ChowNow.vue'
import ChowNowButton from './components/ChowNowButton.vue'

export default {
  name: 'app',
  components: {
    AppNav,
    Crossfade,
    ChowNow,
    ChowNowButton
  },
  mounted: function () {
    window.onhashchange = function () {
      if (!window.location.hash) {
        let iframe = document.getElementById('chownow-wrap')
        let darken = document.getElementById('darken')
        if (iframe.classList.contains('open')) {
          iframe.classList.remove('open')
          darken.classList.remove('dark')
        }
      }
    }
    if (window.location.hash && window.location.hash === '#order') {
      window.__cnOrderNow = true
      // document.getElementById('chownow-toggle-label').click()
    }
  }
}
</script>

<style>
#chownow-button {
  position: fixed;
  top: 0;
  margin: 16px 10px;
  right: 0;
  z-index: 10;
}

@media (max-width: 1200px) {
  #chownow-button {
    bottom: 0;
    top: auto;
  }

  #outer-container {
    margin-bottom: 70px;
  }
}

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
textarea {
  font-family: 'Arial';
}
body {
  margin: 0 auto;
  background: gray;
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 30px;
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
  width: calc(100% - 2 * 15px);
  margin-top: 70px;
  padding: 15px;
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

span.underline {
  transition: all .2s;
  border-bottom: 1px solid #fff;
  padding-bottom: -10px;
}

span.underline:hover {
  border-bottom: 3px solid #fff;
}

form * {
  -ms-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
}



form * {
  height: 30px;
  background: rgba(0,0,0,0);
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;

  display: inline-block;
  width: 40%;
}

@media screen and (max-width: 800px) {
  form * {
    width: 80%;
  }
}

select * {
  background-color: #FFFFFF;
  color: #333333;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: #FFFFFF;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #FFFFFF;
  opacity: 1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #FFFFFF;
  opacity: 1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #FFFFFF;
}
::-ms-input-placeholder { /* Microsoft Edge */
  color: #FFFFFF;
}
</style>
