<template>
  <div id="chownow-component">
    <label for="chownow-toggle" v-on:click="toggleDark()"></label>
    <input type="checkbox" id="chownow-toggle" />
    <div id="chownow-wrap">
      <iframe src="https://ordering.chownow.com/order/9478/locations" id="chownow" frameBorder="0"></iframe>
      <div id="chownow-close" v-on:click="closeChowNow(); toggleDark()">
      </div>
    </div>
    <div id="darken"></div>
  </div>
</template>

<script>
export default {
  name: 'order',
  methods: {
    closeChowNow: function () {
      document.getElementById('chownow-toggle').checked = false
    },
    toggleDark: function () {
      let el = document.getElementById('darken')
      if (el.classList.contains('dark')) {
        el.classList.remove('dark')
      } else {
        el.classList.add('dark')
      }
    }
  }
}
</script>

<style scoped>
#chownow-toggle {
  clip: rect(0, 0, 0, 0);
  display: none;
}
label[for="chownow-toggle"]:before {
  content: "Order Now!";
  padding: 10px 20px;
  margin: 200px auto;
  background: #7D3A38;
  font-size: 24px;
  border-radius: 8px;
}
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
#chownow-toggle:checked + #chownow-wrap {
  transform: translateX(0%);
}
#chownow {
  width: 550px;
  height: 100%;
  float: left;
  display: inline-block;
}
#chownow-close {
  height: 100%;
  text-align: left;
  display: inline-block;
  text-align: left;
  width: calc(100% - 550px);
  background: url(/static/order/left.svg);
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 10px 10px;
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
    width: 10%;
    background-position: 50% 10px;
  }
}
</style>
