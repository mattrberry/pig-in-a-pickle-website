<template>
  <div id="chownow-component">
    <div id="chownow-wrap">
      <iframe src="https://ordering.chownow.com/order/9478/locations" id="chownow" frameBorder="0"></iframe>
      <div id="chownow-close" v-on:click="toggleChowNow()"></div>
    </div>
    <div id="darken"></div>
  </div>
</template>

<script>
import { ChowNowToggle } from './mixins/ChowNowToggle.js'

export default {
  name: 'chownow',
  mixins: [ChowNowToggle]
}
</script>

<style scoped>
#chownow-wrap {
  z-index: 100;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform .4s ease-in;
  overflow: hidden;
}
#chownow-wrap.open {
  transform: translateX(0%);
}
#chownow {
  width: 550px;
  height: 100%;
  float: left;
  display: inline-block;
}
#chownow-close {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100vw;
  background: url(/static/order/left.svg);
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 560px 10px;
  z-index: -1;
}

#darken {
  z-index: 50;
  background: rgba(0,0,0,0);
  transition: background .4s;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  pointer-events: none;
}
#darken.dark {
  background: rgba(0,0,0,.8);
}

@media (max-width: 800px) {
  #chownow {
    width: 90%;
  }
  #chownow-close {
    background-position: calc(100% - 10px) 10px;
  }
}
</style>
